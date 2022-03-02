import { useStore } from '../storeCR/';
import { magicalTodo } from '../storeCR/Ureducer/action';
import { ADD_TODO, SET_TODO_INPUT, DELETE_TODO, EDIT_TODO } from '../storeCR/Ureducer/contants';
import { AiFillEdit } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';
function Todo() {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;
    let [pointLi, setPointLi] = useState("");
    const handleAddTodo = () => {
        dispatch(magicalTodo(ADD_TODO, todoInput));
    }
    const handleEditTodo = (index) => {
        const EleEdit = <div className='edit'>
            <input value={todos[index]} 
            onChange={(e)=>dispatch(magicalTodo(EDIT_TODO, e.target.value))}/>
            <button onClick={()=>(setPointLi(""))}>OK</button>
        </div>;
        setPointLi(EleEdit);
    }
    return (
        <div className='todo'>
            <div className='todo_input'>
                <input type="text" value={todoInput}
                onChange={(e) => {
                    dispatch(magicalTodo(SET_TODO_INPUT,e.target.value))
                }}/>
                <button 
                onClick={handleAddTodo}>
                    Add
                </button>
            </div>
            <div className='todo_list'>
                <ul>
                    {todos.map((todo,index)=>(
                        <li key={index}>{todo}
                        <span onClick={()=>handleEditTodo(index)}>
                            <AiFillEdit/>
                        </span>
                        <span 
                        onClick={()=>dispatch(magicalTodo(DELETE_TODO, index))}>
                            <FaTimes/>
                        </span>
                        {pointLi}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todo
