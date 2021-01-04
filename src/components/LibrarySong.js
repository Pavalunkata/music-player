import React from 'react';



const librarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs}) => {
    //Adding Event Handlers
    const songSelectHandler = () =>{
        const selectoedSong = songs.filter((state) => state.id===id);
        setCurrentSong(selectoedSong[0])
        // Checking if the spong is playing
        if(isPlaying){
            setTimeout(() => {  audioRef.current.play(); }, 1000);
        }
        // Adding accent to selected song
        const accentSong = songs.map((song) =>{
        if(song.id === id){
            return {
                ...song,
                active: true,
            }
        }else{
            return{
                ...song,
                active: false,
                }
            }
        });
        setSongs (accentSong)
    }

    return(
        <div onClick={songSelectHandler}className={`library-song ${song.active ? "selected" : ""}`}>
            <img src={song.cover} alt={`${song.name} + cover`}/>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}



export default librarySong;