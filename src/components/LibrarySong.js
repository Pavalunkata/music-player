import React from 'react';



const librarySong = ({song, songs, setCurrentSong, id}) => {
    //Adding Event Handlers
    const songSelectHandler = () =>{
        const selectoedSong = songs.filter((state) => state.id===id);
        setCurrentSong(selectoedSong[0])
    }
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