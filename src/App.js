import React, {useState} from 'react';
//Adding components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
//Adding stayles
// eslint-disable-next-line
import stayle from './stayle/stayle.scss';
//Import Songs
import data from './util';


function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong = {currentSong} />
      <Player 
        setIsPlaying = {setIsPlaying}
        isPlaying = {isPlaying} 
        currentSong = {currentSong} 
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
