import React from 'react'
import block from 'bem-cn'

const b = block('buttoncomponent')

class Buttoncomponent extends React.Component{
    constructor(){
        super()

        this.state = {
            likes:0, 
            dislikes:0
        }

    }

    onLike = () => {
        this.setState({likes: this.state.likes + 1})
    }

    onDislike = () => {
        this.setState({dislikes: this.state.dislikes + 1})                    
    }

    render() {
        return <div className={b}>
            Likes: {this.state.likes}
            <button className={b('button')} onClick={this.onLike}>Like</button>

            Dislikes: {this.state.dislikes}
            <button className={b('button')} onClick={this.onDislike}>Dislike</button>
        </div>                   
    }
}

export default Buttoncomponent 
