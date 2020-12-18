import React from 'react';



const librarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying}) => {
    //Adding Event Handlers
    const songSelectHandler = () =>{
        const selectoedSong = songs.filter((state) => state.id===id);
        setCurrentSong(selectoedSong[0])
        // Checking if the spong is playing
        if(isPlaying){
            const playPromise = audioRef.current.song();
            if(playPromise !== undefined){
            playPromise.then((audio)=>{
                audioRef.current.play();
                });
            }
        }
    };

    return(
        <div onClick={songSelectHandler}className="library-song">
            <img src={song.cover} alt={`${song.name} + cover`}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}



export default librarySong;