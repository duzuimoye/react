import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeSong } from '../redux/actions';
import PlayerList from '../components/play/PlayList';

const mapStateToProps =(state) =>({
  currentSong: state.song,
  playSongs: state.songs
});
const mapDispatchToProps =(dispatch) =>({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(PlayerList);