import React, {useState, useRef } from 'react';

//Adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import Nav from './components/Nav';

//Adding stayles
// eslint-disable-next-line
import stayle from './stayle/stayle.scss';

//Import Songs
import data from './data';


function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    });
 
  // Add Ref
  const audioRef = useRef(null);

  // Add Event Handlers
  const playSongHandler =()=>{
    if(isPlaying){
      audioRef.current.pause();
      setIsPlaying (!isPlaying);
    }else{
      audioRef.current.play();
      setIsPlaying (!isPlaying);
        }
  
    };
  const timeUpdateHandler = (e) =>{
      const current = e.target.currentTime;
      const duration = e.target.duration;
      setSongInfo ({...songInfo, currentTime: current, duration: duration});
  };
  
  
  return (
    <div className="App">
      <Nav 
        libraryStatus = {libraryStatus}
        setLibraryStatus = {setLibraryStatus}
      />
      <Song currentSong = {currentSong} />
      <Player 
        setIsPlaying = {setIsPlaying}
        isPlaying = {isPlaying} 
        currentSong = {currentSong}
        audioRef = {audioRef}
        playSongHandler = {playSongHandler} 
        timeUpdateHandler = {timeUpdateHandler}
        songInfo = {songInfo}
        setSongInfo = {setSongInfo}
        songs = {songs}
        setCurrentSong = {setCurrentSong}
      />
      <Library 
      songs={songs} 
      setCurrentSong={setCurrentSong}
      audioRef = {audioRef}
      isPlaying= {isPlaying}
      setSongs = {setSongs}
      libraryStatus = {libraryStatus}
      />
      <audio onTimeUpdate = {timeUpdateHandler}
        onLoadedMetadata = {timeUpdateHandler} 
        ref={audioRef} 
        src={ currentSong.audio }>
        </audio>
    </div>
  );
}

export default App;
