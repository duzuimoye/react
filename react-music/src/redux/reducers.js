import { combineReducers, Reducer } from 'redux'
import * as ActionTypes from './actionTypes';
const initialState = {
  song: {},
  songs: [],
  showStatus: false
}
//修改当前歌曲
function song(song = initialState.song, action){
  switch (action.type) {
    case ActionTypes.CHANGE_SONG:
      return action.song
    default: 
      return song
  }
}
function songs(songs = initialState.songs, action) {
  switch (action.type) {
    case ActionTypes.SET_SONGS:
      return action.songs;
    default:
      return songs
  }
}
const reducer = combineReducers({
  song,
  songs
})
export default reducer