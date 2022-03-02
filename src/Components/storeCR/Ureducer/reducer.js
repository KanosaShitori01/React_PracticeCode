import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODO_INPUT } from "./contants";

const initState = {
    todos: [],
    todoInput: "",
}
const reducer = (state, action) => {
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case SET_TODO_INPUT: 
            return {
                ...state,
                todoInput: action.payload
            }
        case EDIT_TODO: 
            const editState = [...state.todos];
            editState[action.payload.id] = action.payload.val;
            return {
                ...state,
                todos: [...editState]
            }
        case DELETE_TODO: {
            const changedTodo = [...state.todos];
            changedTodo.splice(action.payload, 1);
            return {
                ...state,
                todos: [...changedTodo]
            }
        }  
        default: 
            throw new Error("Invalid Error");
    }
}
export {initState, reducer};