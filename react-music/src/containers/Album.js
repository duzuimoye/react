import  {connect} from 'react-redux';
import {showPlayer,changeSong,setSongs} from  '@/redux/actions.js';
import Album from '../components/album/Album';

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSongs: (song) =>{
    dispatch(changeSong(song));
  },
  setSongs:(songs) =>{
    dispatch(setSongs(songs))
  },
  showMusicPlayer: (status) => {
    dispatch(showPlayer(status))
  }
})

export default connect (null,mapDispatchToProps) (Album)