/**
 * Created by hiro on 2017/05/02.
 */

export function startTimeAction (intervalID) {
    return {type: 'START_TIMER', intervalID: intervalID}
}

export function stopTimerAction () {
    return {type: 'STOP_TIMER'}
}

export function updateTimerAction () {
    return {type: 'UPDATE_TIMER'}
}

export function resetTimerAction () {
    return {type: 'RESET_TIMER'}
}