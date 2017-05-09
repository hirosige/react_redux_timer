/**
 * Created by hiro on 2017/05/02.
 */

export function start (state, intervalID) {
  return Object.assign({}, state, {
    started: true,
    intervalID: intervalID
  })
}

export function stop (state) {
  clearInterval(state.intervalID)

  return Object.assign({}, state, {
    started: false,
    intervalID: -1
  })
}

export function update (state) {
    const time = state.time + 1
    const hours = toHours(time)
    const minutes = toMinutes(time)
    const seconds = toSeconds(time)

    return Object.assign({}, state, {
        hours: toText(hours),
        minutes: toText(minutes),
        seconds: toText(seconds),
        time: time
    })
}

export function reset (state) {
    return Object.assign({}, initialState(), {
        started: state.started,
        intervalID: state.intervalID
    })
}

export function initialState () {
    return {
        hours: '00',
        minutes: '00',
        seconds: '00',
        time: 0,
        started: false,
        intervalID: -1
    }
}

function toHours (time) {
  return parseInt(time / 60 / 60)
}

function toMinutes (time) {
  return parseInt(time / 60 % 60)
}

function toSeconds (time) {
  return time % 60
}

function toText (time) {
  return ('00' + time).slice(-2)
}