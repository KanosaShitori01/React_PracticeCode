import {useRef, useState, useLayoutEffect} from 'react';
const countDownNum = 60;
function CountDownRef(){
    const [count, setCount] = useState(countDownNum);
    let idCount = useRef();
    let isTurnPlay = useRef();
    let isTurnStop = useRef();
    useLayoutEffect(() => {
        if(count < 0) {
            clearInterval(idCount.current);
            alert("DONE");
            isTurnPlay.current.disabled = false;
            setCount(countDownNum);
        }
    }, [count])
    const handleStart = () => {
        const isCountD = setInterval(() => {
            setCount(prev => prev - 1)
        }, 100);
        idCount.current = isCountD;
        isTurnPlay.current.disabled = true;
        isTurnStop.current.disabled = false;
    }
    const handleStop = () => {
        clearInterval(idCount.current);
        isTurnPlay.current.disabled = false;
        isTurnStop.current.disabled = true;
    }
    return(<div>
        <h1>{count}</h1>
        <button ref={isTurnPlay} onClick={handleStart}>Play</button>
        <button ref={isTurnStop} onClick={handleStop}>Stop</button>
    </div>)
}
export default CountDownRef;