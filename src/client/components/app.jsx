import React from 'react'
import block from 'bem-cn'
import Step from './step'
import Messages from './messages'
import Login from './login'

const b = block('app')

const mapStateToProps = state => ({
    profile: state.profile
})

const App = ({profile}) => (
    <div className={b}>
        <div className={b('header')}>
            <div className={b('title')}>
                Welcome to the club.
            </div>
            <div className={b('subtitle')}>
                Making a simple component with React
            </div>
        </div>

        <p className={b('tom')}>Tom is amazing</p>
        <div className={b('demo')}>
            {
                profile ? <Messages /> : <Login />
            }
        </div>

        <div className={b('steps')}>
            <Step num={1}>
                Creating a component.
            </Step>

            <Step num={2}>
                This is where you put the meat of how you do 'Step 2'
            </Step>
        </div>
    </div>
)

export default App
