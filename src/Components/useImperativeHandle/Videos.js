import TTvideo_1 from '../../Videos/toptopvideo_1.mp4';
import {forwardRef, useImperativeHandle, useRef} from 'react';
function Video(props, ref) {
    const videoRef = useRef();
    useImperativeHandle(ref, ()=>({
        play: () => {
            videoRef.current.play();
        },
        pause: () => {
            videoRef.current.pause();
        }
    }))
    return (
        <video ref={videoRef} src={TTvideo_1} 
        width={280}
        height={300}
        />
    )
}

export default forwardRef(Video);
