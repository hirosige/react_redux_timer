/**
 * Created by hiro on 2017/05/02.
 */

import React from 'react'

export default class Timer extends React.Component {
    render () {
        return (
            <div>
                <span className="timer-number" role="hour">{this.state.hours}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number" role="minute">{this.state.minutes}</span>
                <span className="timer-semicolon">:</span>
                <span className="timer-number" role="second">{this.state.seconds}</span>
            </div>
        )
    }
}