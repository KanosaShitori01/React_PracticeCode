import { ADD_JOB, SET_JOB, DELETE_JOB } from "./contants";
//1. Init State
export const initState = {
    job: "",
    jobs: []
}
//3. Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            let changedState = [...state.jobs];
            changedState.splice(action.payload, 1);
            return {
                ...state,
                jobs: changedState    
            }
        default:
            throw new Error("Invalid");
    }
}
export default reducer;
