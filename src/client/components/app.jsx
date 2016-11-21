import React from 'react'
import block from 'bem-cn'
import Section from './section'
import Messages from './messages'
import Login from './login'

const b = block('app')

const mapStateToProps = state => ({
    profile: state.profile
})

const App = ({profile}) => (
    <div className={b}>
        <div className={b('header')}>
            <div className={b('overlay')}>
                <div className={b('title')}>
                    Welcome to the club.
                </div>
                <div className={b('subtitle')}>
                    Making a simple component with React
                </div>
            </div>
        </div>

        <div className={b('steps')}>
            <Section title="Prologue" subtitle="Getting started with React">
                React is a modular framework based around integrating Javascript and Html via components.
                Below is a chat made using React, this is an example of what React can achieve. For the purposes of this tutorial
                we'll be using components to make a like and dislike button.
            </Section>
        </div>

        <div className={b('demo')}>
            {
                profile ? <Messages /> : <Login />
            }
        </div>

        <div className={b('steps')}>
            <Section title="End goal" subtitle="What you'll achieve">
                At the end of this example you'll have a working like and dislike button to show off your fame ... 
                or infamy. To get you started working with React we have a repository with the necessary set-up files
                to dive right into the coding.
            </Section>
        </div>

        <div className={b('steps')}>
            <Section title="Step 1" subtitle="Cloning the starter-kit">
                Go to insertlinkhere and clone the starter-kit repository to your computer wherever you prefer. This will get you setup
                with the basic Webpack and Babel configurations to start working with React.
            </Section>

            <Section title="Step 2" subtitle="Creating an index">
                Make sure you're working within the main directory '/starter-kit' and create a file called 'index.html'
                For the sake of this build our loader will be using the index.html file. This should be a pretty standard
                setup looking like this:
                <pre className={b('code')}>
                    {`\
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="utf-8">
        <title>starter-kit</title>
    </head>
    <body>
    </body>
</html>\
                      `}
                </pre>
                We'll be working with this file more later, but for now this is sufficient.
            </Section>

            <Section title="Step 3" subtitle="Creating a component">
                Make sure you're working within the starter-kit/src/client/component/ folder. Name the file 'buttoncomponent.jsx', and
                we can get the groundwork of what you need started. The start of your file should look like this:
                <pre className={b('code')}>
                    {`\
import React from 'react'

class Buttoncomponent extends React.Component{
    constructor(){
        super()

        this.state = {
            likes:0, 
            dislikes:0
        }
    }
}\
                    `}
                </pre>
                We create a class called Buttoncomponent that stores a state for 'likes' and 'dislikes' both
                initialized at 0, so we can start fresh.
            </Section>

            <Section title="Step 4" subtitle="Creating the methods">
                Now we have states set for our likes and dislikes. Time to create some methods so we can manipulate
                these later with GUI buttons via Html div's. This is ES7 Javascript so if you know Javascript this should be a piece of cake!
                Your file should look like this:
                <pre className={b('code')}>
                    {`\
import React from 'react'

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
}\
                        `}
                </pre>
                    Here we've added the methods 'onLike' and 'onDislike' that will update our
                    state in the constructor to display the value of likes or dislikes after we
                    add a button to click.
            </Section>

            <Section title="Step 5" subtitle="Rendering the buttons">
                The biggest advantage of using React is that we can write Html declaratively and
                manage per component state when needed via Javascript. (It runs anywhere!).
                Now we add a render method underneath our Javascript and declare the html we want.
                <pre className={b('code')}>
                    {`\
import React from 'react'

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
        return <div>
            Likes: {this.state.likes}
            <button onClick={this.onLike}>Like</button>

            Dislikes: {this.state.dislikes}
            <button onClick={this.onDislike}>Dislike</button>
        </div>                   
    }
}

export default Buttoncomponent\
                        `}
                </pre>
                Now our component is done, the line at the bottom 'export default Buttoncomponent' allows us
                to import this into other components.
            </Section>

            <Section title="Step 6" subtitle="Creating a main component">
                The power of React is not only in writing Html declaratively alongside Javascript, but it is also being
                able to nest and re-use components. Change back to the main directory 'starter-kit/src/client'
                Create a file called 'main.jsx' and in here we'll be importing the component we just made.
                <pre className={b('code')}>
                    {`\
import React from 'react'
import { render } from 'react-dom'

import Buttoncomponent from './buttoncomponent'

render(
    <Buttoncomponent />,
    document.getElementById('main')
)
                        `}
                </pre>
                The 'main.jsx' component acts as a collection for all of the sub components ie: 'buttoncomponent.jsx'
                to be rendered in the Html. We 'import' it at the top of the file.
            </Section>

            <Section title="Step 7" subtitle="Inserting the components into the Html">
                Now we will be revisiting the file 'index.html' in 'starter-kit/' and adding in the
                main component that is holding all of our sub-components. (In this case we only have one, but this is
                the power of React). We insert this as follows:
                <pre className={b('code')}>
                    {`\
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset="utf-8">
        <title>starter-kit</title>
    </head>
    <body>
        <div id="main">
        </div>
    </body>
</html>\
                        `}
                </pre>
            The component is now inserted via a div in the main 'index.html', the div id
            must match the ElementId provided in 'main.jsx'.
            </Section>
        </div>
    </div>
)

export default App
