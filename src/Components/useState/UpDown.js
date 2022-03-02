import React, { useEffect, useRef, useState } from 'react';

function UpDown() {
    let box = useRef();
    const [move, setMove] = useState(10);
    const next = () => {
        setMove(prev => prev + 10)
    }
    const prev = () => {
        setMove(prev => prev - 10)
        console.log(move)
    }
    const handle = () => {
        box.current.style.fontSize = `${move}px`;
    }
    useEffect(()=>{
        handle();
    }, [move])
  return <div>
      <p ref={box}>BOX</p>
      <button onClick={()=>next()}>Up</button>
      <button onClick={()=>prev()}>Down</button>
  </div>;
}

export default UpDown;
