/**
 * Created by hiro on 2017/05/02.
 */

import React from 'react'
import Timer from './Timer.jsx'
import TimerButton from './timer-button.jsx'

export default class App extends React.Component {

    render () {
        return (
            <div className="center-container" style={{marginTop: '100px'}} >
                <Timer hours={this.props.hours} minutes={this.props.minutes} seconds={this.props.seconds} ref="timer" />
                <div className="timer-button-container">
                    <TimerButton text={'START'} handleClick={this.props.startTimer} />
                    <TimerButton text={'STOP'}  handleClick={this.props.stopTimer} />
                    <TimerButton text={'RESET'} handleClick={this.props.resetTimer} />
                </div>
            </div>
        )
    }
}