import {useReducer} from 'react';
/*
useState 
    1. Init state: 0
    2. Actions: Up (state + 1) / Down (state - 1)
useReducer
    1. Init state: 0
    2. Actions: Up (state + 1) / Down (state - 1)
    3. Reducer
    4. Dispatch
*/
//Init State
const initState = 0;
// Actions
const UP_ACTION = "up";
const DOWN_ACTION = "down";
// Reducer
const reducer = (state, action) => {
    console.log("Reducer Running...")
    switch(action){
        case UP_ACTION: 
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default: 
            throw new Error("Invalid Action!");
    }
}
function ExReducer(){
    const [count, disPatch] = useReducer(reducer, initState);

    return(<div>
        <h1>{count}</h1>
        <button 
        onClick={()=>disPatch(UP_ACTION)}>
            Up
        </button>
        <button 
        onClick={()=>disPatch(DOWN_ACTION)}>
            Down
        </button>
    </div>)
}
export default ExReducer;