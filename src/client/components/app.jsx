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
                    WELCOME TO THE CLUB
                </div>
                <div className={b('subtitle')}>
                    MAKING A SIMPLE COMPONENT WITH REACT
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
                <a href="https://github.com/why-you-askin-me/starter-kit">Go here</a> and clone the starter-kit repository to your computer wherever you prefer. This will get you setup
                with the basic Webpack and Babel configurations to start working with React. This tutorial is meant to work with command lines in Unix based systems, or with Unix shell emulators.
            </Section>

            <div id="Step2"></div>
            <Section title="Step 2" subtitle="Creating an index">
                Make sure you're working within 'starter-kit/src/' and create a file called 'index.html'
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
                Again, working within the starter-kit/src/ folder. Name a new file 'buttoncomponent.jsx', and
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
                able to nest and re-use components.
                Create a file called 'main.jsx' and in here we'll be importing the component we just made.
                <pre className={b('code')}>
                    {`\
import React from 'react'
import { render } from 'react-dom'

import Buttoncomponent from './buttoncomponent'

render(
    <Buttoncomponent />,
    document.getElementById('main')
)\
                        `}
                </pre>
                The 'main.jsx' component acts as a collection for all of the sub components ie: 'buttoncomponent.jsx'
                to be rendered in the Html. We 'import' it at the top of the file.
            </Section>

            <div id="Step7"></div>
            <Section title="Step 7" subtitle="Inserting the components into the Html">
                Now we will be revisiting the file 'index.html' in 'starter-kit/src/' and adding in the
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

            <div id="Step8"></div>
            <Section title="Step 8" subtitle="Running the component">
                So now you're done! The components are all in the corresponding slots. Now head to your terminal and enter:
                <pre className={b('code')}>
                    {`\
npm install
npm run watch\
                        `}
                </pre>
                This will download the necessary node modules, and build the site under 'starter-kit/build/client/' as the file 'index.html'. Open that file in your browser of
                choice (we recommend Google Chrome) and you're off to the races! Like or Dislike to your hearts content.
            </Section>

            <div id="Conclusion"></div>
            <Section title="Conclusion" subtitle="Reporting on React">
                <div className={b('markdown')}>
                    <ReactMarkdown source={`
## What is React?

React is a declarative, efficient, and flexible JavaScript Library for building
user interfaces. Webpack is a build system that lets you compile your specified
files automatically when you type in a command.

## Popularity:

React is one of the newest and most popular web applications for front-end
application development. React's rise in popularity came shortly after Angular 2
was announced. The main problem with Angular 2 was that it was not going to be
built with backwards compatibility which affected a lot of developers to the
point of abandoning their projects. However React offered a lot of performance
benefits which convinced developers to give it a chance.

## Usage with Webpack:

Webpack is a relatively new and popular build system. One of the main reasons
why it is popular, is because it allows users to split their code more
efficiently. Most languages clump code into one file making it difficult for
people to work simultaneously. However, Webppack allows developers to work on a
project simultaneously. Once the development is finished, webpack is used to
compile everything into one big file. This is favourable to many developers
that plan on doing large scale projects. An example of this would be Facebook
which uses React and Webpack.

### React & Webpack Strengths:

- Simpler Code with Fewer Bugs
- React is fast
- High compatability with existing code or other frameworks

### React & Webpack Weaknesses:

- Steep learning curve
- Lots of effort to setup

## Who does React help?

React is best suited for developers who plan on working on large scale projects.
Developers working on small websites would most likely not use React due to a
steep learning curve and setup. Small projects benefit less from React.

Websites that use React require dynamic and interactive components. Some popular
websites that use React are:
- [Facebook](https://www.facebook.com/)
- [Discord](https://discordapp.com/)
- [Spotify](https://www.spotify.com/ca-en/)
- [Youtube](https://www.youtube.com/)

                        `} />
                </div>
            </Section>

            <div id="Credits"></div>
            <Section title="Credits" subtitle="Work division">
                <div className={b('markdown')}>
                    <ReactMarkdown source={`
## Marko Mijalkovic:

- Lead Developer
- Developed chat
- Setup configurations

## Troy Humber:

- Assistant Developer
- Wrote tutorial
- Styled via Stylus (CSS)

## Clarence Su:

- Styled via Stylus (CSS)
- Wrote up history & technological basis of React with Webpack

## Tom Brunton:

- Conclusion and credits
- Button example for tutorial
- Prologue

## Alex Zhou:

- Conclusion and credits
- Button example for tutorial
- References


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
