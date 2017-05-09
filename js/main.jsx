/**
 * Created by hiro on 2017/05/02.
 */

import React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'
import {createStore} from 'redux'

import App from './components/App.jsx'
import {timer} from './reducer.js'

const store = createStore(timer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('timer-container')
);