import React from 'react'
import block from 'bem-cn'
import Messages from './messages'
import Login from './login'

const b = block('app')

const mapStateToProps = state => ({
    profile: state.profile
})

const App = ({profile}) => (
    <div className={b}>
        <p className={b('tom')}>Tom is amazing</p>

        <div className={b('header')}>
            <div className={b('title')}>
                Welcome to the club.
            </div>
            <div className={b('subtitle')}>
                Making a simple component with React
            </div>
        </div>

        <div className={b('step')}>
            <div className={b('step-header')}>
                Step 1:
            </div>
            <div className={b('step-body')}>
                This is where you put the meat of how you do 'Step 1'
            </div>
        </div>

        <div className={b('step')}>
            <div className={b('step-header')}>
                Step 2:
            </div>
            <p className={b('step-body')}>
                This is where you put the meat of how you do 'Step 2'
            </p>
        </div>
        <div className={b('demo')}>
            {
                profile ? <Messages /> : <Messages />
            }
        </div>
    </div>
)

export default App
