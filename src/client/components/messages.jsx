import React from 'react'
import { connect } from 'react-redux'
import block from 'bem-cn'

const b = block('messages')

const mapStateToProps = state => ({
    log: state.log
})

const Messages = ({log}) => (
    <div className={b}>
        {
            log.map(msg => (
                <div key={id} className={b('message')}>{msg}</div>
            ))
        }
    </div>
)

export default connect(mapStateToProps)(Messages)
