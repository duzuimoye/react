import react,{Component} from 'react';
import MiniPlayer from '../components/play/Miniplayer';
import { connect } from 'react-redux';
import {changeSong} from '../redux/actions';
//映射Redux全局的state到组件的props上
const mapStateToProps = (state) => ({
  currentSong: state.song,
  playSongs: state.songs
});
//映射dispatch到props上
const mapDispatchToProps = (dispatch) =>({
  changeCurrentSong: (song) =>{
    dispatch(changeSong(song));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(MiniPlayer); 