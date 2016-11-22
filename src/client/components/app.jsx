import React from 'react'
import { connect } from 'react-redux'
import block from 'bem-cn'
import Section from './section'
import Messages from './messages'
import Login from './login'
import Buttoncomponent from './buttoncomponent'
import Anchor from './anchor'
import ReactMarkdown from 'react-markdown'

const b = block('app')

const mapStateToProps = state => ({
    loggedIn: !!state.profile
})

const App = ({loggedIn}) => (
    <div className={b}>
        <Anchor />
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
            <div id="Prologue"></div>
            <Section title="Prologue" subtitle="Getting started with React">
                React is a modular framework based around integrating Javascript and Html via components.
                Below is a chat made using React, this is an example of what React can achieve. For the purposes of this tutorial
                we'll be using components to make a like and dislike button.
            </Section>
        </div>

        <div className={b('demo')}>
            {
                loggedIn ? <Messages /> : <Login />
            }
        </div>

        <div className={b('steps')}>
            <div id="EndGoal"></div>
            <Section id="Endgoal" title="End Goal" subtitle="What you'll achieve">
                At the end of this example you'll have a working like and dislike button to show off your fame ... 
                or infamy. To get you started working with React we have a repository with the necessary set-up files
                to dive right into the coding.
            </Section>
            <Buttoncomponent />
        </div>

        <div className={b('steps')}>
            <div id="Step1"></div>
            <Section title="Step 1" subtitle="Cloning the starter-kit">
                Go to insertlinkhere and clone the starter-kit repository to your computer wherever you prefer. This will get you setup
                with the basic Webpack and Babel configurations to start working with React.
            </Section>

            <div id="Step2"></div>
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

            <div id="Step3"></div>
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

            <div id="Step4"></div>
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

            <div id="Step5"></div>
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

            <div id="Step6"></div>
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

            <div id="Step7"></div>
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

            <div id="Conclusion"></div>
            <Section title="Conclusion" subtitle="Reporting on React">
                <div className={b('markdown')}>
                    <ReactMarkdown source={`
## What is React?

React is a declarative, efficient, and flexible JavaScript Library for building user interfaces. Webpack is a build system that lets you compile your specified files automatically when you type in the command. 

## Popularity:

React is one of the newest and most popular web applications for front-end application development. React's rise in popularity came shortly after Angular 2 was announced. Its main problem was that Angular 2 was not going to be build with backwards compatibility which affected a lot of developers in trouble to the point of abandoning their projects. However with the performance benefits that React offered, it made a lot of users try it.

## Usage with Webpack:

Webpack is also a recent and popular build system. One of the main reasons why its popular is because it allowed the users to split their code much more efficiently. As most codes run it all together at once, Webpack will allow users split up their code during development. Once the development is finished, they can use webpack to compile everything into one file. This means that they can run the codes when necessary. This was highly favourable to many programmers especially users or companies that do large scale projects. One of the companies that uses this is Facebook. Facebook uses both React & Webpack.

### Some React & Webpack Strengths:

- Simpler Code with Fewer Bugs
- React is fast
- High compatability with existing code or other frameworks
	
### Some React & Webpack Weaknesses:

- Large library
- Steep learning curve
- Lots of effort to set-up 

## Developers who would use it?

The main developers who use React are developers working on large website. For example Facebook uses React, they also are in fact the developers of React as well. Developers who are developing a small website would most likely not use React beacuse of the steep learning curve and intensive setup are not worth it for the small assistence that using React would provide for a small website.

The main types of websites that React is used for is websites that require dynamic componenets and interactive components in them like chat rooms. Some websites that have these requirements that would benifit from React are Facebook, Youtube, and Spotify to name a few. 

                        `} />
                </div>
            </Section>
            
            <div id="Credits"></div>
            <Section title="Credits" subtitle="Work division">
                <div className={b('markdown')}>
                    <ReactMarkdown source={`
## Marko Mijalkovic:

- Lead Developer on React & Webpack
- Developed the chat
- Set-up the configurations

## Troy Humber:

- Assistant Developer
- Writting the tutorial
- Wrote up the history & technological bases of React & Webpack 

## Clarence Su:

- Worked on the CSS

## Tom Brunton:

- Worked on conclusion and credits
- Worked on button example for tutorial
- Worked on Intro 

## Alex Zhou:

- Conclusion and credits
- button example for tutorial 
- Worked on Intro


## References:

- [Facebook react tutorial](https://facebook.github.io/react/docs/hello-world.html)
- [Webpack documentation](https://webpack.github.io/docs/)
- [Setting up Webpack, Babel, React environment](https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr)
- [State manager](http://redux.js.org/)
- [Chat websocket](https://github.com/websockets/ws/blob/master/doc/ws.md)
- [React popularity article](https://medium.com/@MattKovalsky/why-has-react-js-s-popularity-grown-so-dramatically-afd2bf56aa41#.cbkbu9x3s)
- [About Webpack](http://webpack.github.io/docs/what-is-webpack.html)
                    `} />
                </div>
            </Section>
        </div>
    </div>
)

export default connect(mapStateToProps)(App)
