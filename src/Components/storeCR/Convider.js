import { useReducer } from "react";
import Context from "./Context";
import { initState, reducer } from "./Ureducer/reducer";
function Convider({children}){
    const [state, dispatch] = useReducer(reducer, initState);
    return(
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}
export default Convider;