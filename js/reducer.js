/**
 * Created by hiro on 2017/05/02.
 */

import * as timerModel from './timer-model'

export function timer (state = timerModel.initialState(), action) {
    console.log(state);

    switch (action.type) {
        case 'START_TIMER':
            return timerModel.start(state, action.intervalID)
        case 'STOP_TIMER':
            return timerModel.stop(state)
        case 'UPDATE_TIMER':
            return timerModel.update(state)
        case 'RESET_TIMER':
            return timerModel.reset(state)
        default:
            return state
    }
}