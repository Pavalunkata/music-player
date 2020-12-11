import React, {useState} from 'react';
//Adding components
import Player from './components/Player';
import Song from './components/Song';
//Adding stayles
import stayle from './stayle/stayle.scss';
//Import Songs
import data from './util';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0])
  return (
    <div className="App">
      <Song currentSong = {currentSong} />
      <Player />
    </div>
  );
}

export default App;
