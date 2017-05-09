/**
 * Created by hiro on 2017/05/02.
 */

import React from 'react'

export default class TimerButton extends React.Component {
    render () {
        return (
            <button className="timer-button" type="button" name="button" onClick={this.props.handleClick}>
                {this.props.text}
            </button>
        )
    }
}