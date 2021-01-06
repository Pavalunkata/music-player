import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faArrowAltCircleLeft, faArrowAltCircleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({isPlaying, audioRef, playSongHandler, setSongInfo, songInfo, songs, currentSong, setCurrentSong, setSongs }) =>{

// Adding handler
    const dragHandler = (e) =>{
        audioRef.current.currentTime=e.target.value;
        setSongInfo ({...songInfo, currentTime: e.target.value});
    }
    const getTime=(time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
 
    };
// useEffect
    useEffect(() =>{
    // Adding accent to selected song
    const accentSong = songs.map((song) =>{
        if(song.id === currentSong.id){
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
    });

    const chnageSongHandler = (duration) => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if(duration === "skip-forward"){
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        }else if(duration === "skip-back"){
            setCurrentSong(songs[currentIndex -1])
            if((currentIndex -1 ) % songs.length === -1){
                setCurrentSong(songs[songs.length - 1])
            }
        }
        if(isPlaying){
            setTimeout(() => {  audioRef.current.play(); }, 1000);
        }
    };

    return (
            <div className="player">
                <div className="time-control">
                    <p>{getTime(songInfo.currentTime)}</p>
                    <input
                    min={0} 
                    max={songInfo.duration || 0} 
                    value={songInfo.currentTime}
                    onChange={dragHandler} 
                    type="range" 
                    />
                    <p>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon onClick={() => chnageSongHandler("skip-back")} className="skip-back" size="2x" icon={faArrowAltCircleLeft} />
                    <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                    <FontAwesomeIcon onClick = {() => chnageSongHandler("skip-forward")} className="skip-forward" size="2x" icon={faArrowAltCircleRight} />
                </div>
            </div>
    )
}
export default Player;