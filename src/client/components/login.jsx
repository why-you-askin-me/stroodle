import React from 'react'
import { connect } from 'react-redux'
import block from 'bem-cn'
import { auth } from '../actions'

const b = block('login')

const mapDispatchToProps = dispatch => ({
    auth: name => dispatch(auth(name))
})

class Login extends React.Component {
    constructor() {
        super()

        this.state = { text: "" }
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.auth(this.state.text)
    }

    render() {
        return <form className={b} onSubmit={this.handleSubmit}>
            <div className={b('prompt')}>Enter a name</div>
            <input
                onChange={this.handleChange}
                type="text"
                className={b('input')}
                value={this.state.text} />
        </form>
    }
}

export default connect(null, mapDispatchToProps)(Login)
