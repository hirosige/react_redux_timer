/**
 * Created by hiro on 2017/05/02.
 */

import {connect} from 'react-redux'

import App from './components/App.jsx'
import * as action from './action.js'

function mapStateToProps (state) {
    return state
}

function mapDispatchToProps (dispatch, props) {
    return {
        startTimer: () => {
            const intervalID = setInterval(() => dispatch(action.updateTimerAction()), 1000)
            dispatch(action.startTimeAction(intervalID))
        },

        stopTimer: () => dispatch(action.stopTimerAction()),

        resetTimer: () => dispatch(action.resetTimerAction())
    }
}

function mergeProps (stateProps, dispatchProps, ownProps) {
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
        startTimer: () => {
            if (!stateProps.started) dispatchProps.startTimer()
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App)