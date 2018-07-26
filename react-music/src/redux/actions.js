import * as ActionTypes from './actionTypes'

export function changeSong(song) {
  return {
    type: ActionTypes.CHANGE_SONG,song
  }
}