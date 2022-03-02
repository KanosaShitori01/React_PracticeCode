import { useEffect, useRef } from "react";
import Video from "./Videos";

function HandleVideos(){
    console.log(14%5);
    const videoRef = useRef();
    const handlePlay = () => {
        videoRef.current.play();
    }
    const handlePause = () => {
        videoRef.current.pause();
    }
    return(<div className="handleVideos">
        <Video ref={videoRef}/>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
    </div>)
}
export default HandleVideos;