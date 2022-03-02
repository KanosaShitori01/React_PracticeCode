import {useReducer, useRef} from 'react';
import {ADD_JOB, SET_JOB, DELETE_JOB} from './Todo/contants';
import reducer, {initState} from './Todo/reducer';
import {magicalJob} from './Todo/action';
import logger from './Todo/logger';

//4. Dispatch
function TodoReducer(){
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const {job, jobs} = state;
    let focJob = useRef();
    const handleSubmit = () => {
        dispatch(magicalJob(ADD_JOB, job))
        dispatch(magicalJob(SET_JOB, ""));
        focJob.current.focus();
    }
    return(<div className='TodoReducer'>
        <input ref={focJob} value={job} placeholder='Enter Todo...'
        onChange={(e)=>dispatch(magicalJob(SET_JOB,e.target.value))}/>
        <button onClick={handleSubmit}>Add</button>
        <ul className='TodoReducer_list'>
            {jobs.map((job,index)=>(
                <li key={index}>{job}  
                    <span style={{cursor: "pointer"}}
                    onClick={()=>{
                        dispatch(magicalJob(DELETE_JOB, index))
                    }}>
                        &times;
                    </span>
                </li>
            ))}
        </ul>
    </div>)
}
export default TodoReducer;