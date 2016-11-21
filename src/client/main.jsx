import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'
import reducers from './reducers/'
import { init } from './socket'

const store = createStore(reducers)

init(store.dispatch)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
