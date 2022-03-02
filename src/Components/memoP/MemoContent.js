import {memo} from 'react';
function MemeContent({onCountUp}) {
    console.log("re-render");
    return(<div>
        <h1>Chào anh em F8 nhá!</h1>
        <button onClick={onCountUp}>Up</button>
    </div>)
}
export default memo(MemeContent);