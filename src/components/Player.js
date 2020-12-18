import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faArrowAltCircleLeft, faArrowAltCircleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({isPlaying, audioRef, playSongHandler, setSongInfo, songInfo }) =>{

    const dragHandler = (e) =>{
        audioRef.current.currentTime=e.target.value;
        setSongInfo ({...songInfo, currentTime: e.target.value});
    }
    const getTime=(time)=>{
        return(
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        );
 
    };

    return (
            <div className="player">
                <div className="time-control">
                    <p>{getTime(songInfo.currentTime)}</p>
                    <input min={0} 
                    max={songInfo.duration} 
                    value={songInfo.currentTime}
                    onChange={dragHandler} 
                    type="range" 
                    />
                    <p>{getTime(songInfo.duration)}</p>
                </div>
                <div className="play-control">
                    <FontAwesomeIcon className="skip-back" size="2x" icon={faArrowAltCircleLeft} />
                    <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                    <FontAwesomeIcon className="skip-forward" size="2x" icon={faArrowAltCircleRight} />
                </div>
            </div>
    )
}
export default Player;