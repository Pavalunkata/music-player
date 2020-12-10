import React from 'react';
//Adding components
import Player from './components/Player';
import Song from './components/Song';
//Adding stayles
import stayle from './stayle/stayle.scss';

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
