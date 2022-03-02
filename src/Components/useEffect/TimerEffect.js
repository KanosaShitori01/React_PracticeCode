import {useState, useEffect} from 'react';
function TimerEffect(){
    const [count, setCount] = useState(180);
    useEffect(()=>{
        const isCount = setInterval(()=>{
            setCount(prevCount => prevCount - 1);
        }, 1000);
        return () => {
            clearInterval(isCount);
        }
    }, [])
    // or
    // useEffect(()=>{
    //     const isCount = setTimeout(()=>{
    //         setCount(count - 1);
    //     }, 1000);
    //     return () => {
    //         clearTimeout(isCount);
    //     }
    // }, [count])
    return (
        <div className='countdown'>
            <h1>{count}</h1>
        </div>
    )
}
export default TimerEffect;