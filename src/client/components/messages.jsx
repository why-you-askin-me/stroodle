import React from 'react'
import { connect } from 'react-redux'
import block from 'bem-cn'
import { textUpdate, textSubmit } from '../actions'

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

const Messages = ({log, messages, profile, onChange, onSubmit}) => (
    <form className={b} onSubmit={onSubmit}>
        <div className={b('scrollable')}>
            <div className={b('history')}>
                {
                    log.map((msg, id) => (
                        <div key={id} className={b('message')}>{msg}</div>
                    ))
                }
            </div>
            <div className={b('future')}>
                {
                    Object.keys(messages).map((key, id) => {
                        if(key == profile) return null
                        return <div key={id} className={b('visor')}>{`${key}: ${messages[key]}`}</div>
                    })
                }
            </div>
        </div>
        <input
            className={b('input')}
            type="text"
            onChange={onChange}
            onKeyPress={resetInput}
            placeholder="Enter a message!" />
    </form>
)

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
