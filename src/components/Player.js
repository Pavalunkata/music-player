import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faArrowAltCircleLeft, faArrowAltCircleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({isPlaying, audioRef, playSongHandler, setSongInfo, songInfo, songs, currentSong, setCurrentSong }) =>{

    const dragHandler = (e) =>{
        audioRef.current.currentTime=e.target.value;
        setSongInfo ({...songInfo, currentTime: e.target.value});
    }
    const getTime=(time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
 
    };

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
                    <p>{getTime(songInfo.duration)}</p>
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