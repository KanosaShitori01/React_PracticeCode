import {useState} from 'react';
function TodoListUSt(){
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(()=>{
        const getJobs = JSON.parse(localStorage.getItem('jobs'));
        return getJobs ?? [];
    });
    const handleAddJob = () => {
        setJobs(prev => {
            const newJob = [...prev, job];
            // Convert to JSON
            const jsonJob = JSON.stringify(newJob);
            localStorage.setItem('jobs', jsonJob);
            // output
            return newJob;
        })
    }
    return(
        <div className="todoList">
            <div className='todoList_inp'>
                <input type="text" value={job} onChange={(e) => setJob(e.target.value)}/>
                <button onClick={handleAddJob}>Add</button>
            </div>
            <div className="todoList_out">
                <ul>
                    {jobs.map((job, index)=>(
                            <li key={index}>{job}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default TodoListUSt;