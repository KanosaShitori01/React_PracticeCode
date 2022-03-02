import {useState} from 'react';
const courses = [
    {
        id: 1,
        name: "HTML & CSS"
    },
    {
        id: 2,
        name: "Javascript"
    },
    {
        id: 3,
        name: "ReactJS"
    }
]
function TwoWayBinding(){
    // Lựa chọn danh sách khóa học với useState
    const [checked, setChecked] = useState([]);
    const handleCheck = (id) => {
        setChecked(prevId => {
            const isChecked = checked.includes(id);
            if(isChecked)
            return checked.filter(idcheck => idcheck !== id)
            else
            return [...prevId, id]
        });
    }
    const handleSubmit = () => {
        console.log(checked)
    }
    console.log(checked);
    return(
        <div className="twoWayBinding">
            {courses.map((course, index) => (
                <div key={course.id}>
                    <input type="checkbox" 
                    checked={checked.includes(course.id)}
                    onChange={()=>{handleCheck(course.id)}}/>
                    {course.name}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default TwoWayBinding;

//(*) Các ví dụ khác

// --- Form Đăng ký thử nghiệm State 
// function TwoWayBinding(){
//     const [name, setName] = useState('');
//     const [gmail, setGmail] = useState('');
//     // - [Ràng buộc một chiều]
//     const handleRegister = () => {
//         console.log({name, gmail});
//     }
//     // - [Ràng buộc hai chiều]
//     const handleConfirm = () => {
//         let confirmText = `Đã xác nhận `;
//         setName(confirmText + name);
//         setGmail(confirmText + gmail);
//     }
//     return(
//         <div className="twoWayBinding">
//             <input type="text" 
//             value={name} 
//             onChange={e => setName(e.target.value)}/>
//             <input type="email" 
//             value={gmail}
//             onChange={e=>setGmail(e.target.value)}/>
//             <button onClick={handleRegister}>Register</button>
//             <button onClick={handleConfirm}>Confirm</button>
//         </div>
//     )
// }