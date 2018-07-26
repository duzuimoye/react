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
    dispatch(changeSong(song));  //dispatch 从后台发送请求获取数据 触发异步操作 commit=>mutations,用来触发同步操作的方法
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(MiniPlayer); 