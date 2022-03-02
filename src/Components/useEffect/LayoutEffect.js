import {useEffect, useLayoutEffect, useState} from 'react';
// useEffect
// 1. Cập nhật tại state 
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi cleanUp nếu Deps được thay đổi 
// 5. Gọi useEffect callback 
// -----------------------------------------------
// useLayoutEffect 
// 1. Cập nhật tại state 
// 2. Cập nhật tại DOM (mutated) 
// 3. Gọi cleanUp nếu Deps được thay đổi 
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI
function LayoutEffect(){
    const [count, setCount] = useState(0);
    // sử dụng useLayoutEffect ở trường hợp này 
    // cho phép ta khắc phục được việc tái lập trễ số đếm và tính sửa vội của useEffect :))
    useLayoutEffect(()=>{
        if(count > 3){
            setCount(0);
        }
    }, [count]);
    const handleCounter = () => {
        setCount(count + 1);
    }
    return(<div>
        <h1>{count}</h1>
        <button onClick={handleCounter}>Run</button>
    </div>)
}
export default LayoutEffect;