import React from 'react'
import { connect } from 'react-redux'
import block from 'bem-cn'
import { textUpdate, textSubmit } from '../actions'
import { LogType } from '../reducers/log'

const b = block('messages')

const mapStateToProps = ({log, messages, profile}) => ({log, messages, profile})

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(textUpdate(e.target.value)),
    onSubmit: e => {
        e.preventDefault()
        dispatch(textSubmit())
    },
})

const resetInput = e => {
    if(e.key === 'Enter') {
        e.target.value = ''
    }
}

class Messages extends React.Component {
    componentDidUpdate() {
        const scrollable = this.scrollable

        const SCROLL_THRESHOLD = 100

        const a = scrollable.scrollTop + scrollable.offsetHeight + SCROLL_THRESHOLD
        const b = scrollable.scrollHeight

        if(a > b) {
            scrollable.scrollTop = scrollable.scrollHeight
        }
    }

    render() {
        const {log, messages, profile, onChange, onSubmit} = this.props

        return <form className={b} onSubmit={onSubmit}>
            <div className={b('scrollable')} ref={r => this.scrollable = r}>
                {[
                    log.map((msg, id) => {
                        switch(msg.type) {
                            case LogType.INFO:
                                return <div key={`log${id}`} className={b('info')}>{msg.text}</div>
                            case LogType.HISTORY:
                                const me = msg.user == profile
                                return <div key={id} className={b('group')}>
                                    <div className={b('author', {me})}>{msg.user}</div>
                                    <div className={b('message', {me, other: !me})}>{msg.text}</div>
                                </div>
                        }
                    }),
                    Object.keys(messages).map((key, id) => {
                        if(key == profile) return null

                        return <div key={`future${id}`} className={b('group')}>
                            <div className={b('author')}>{key}</div>
                            <div className={b('message', {other: true, visor: true})}>
                                {messages[key]}
                            </div>
                        </div>
                    })
                ]}
            </div>
            <input
                className={b('input')}
                type="text"
                onChange={onChange}
                onKeyPress={resetInput}
                placeholder="Enter a message!" />
        </form>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
