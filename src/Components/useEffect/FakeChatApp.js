import {useEffect, useState} from 'react';
const courses = [
    {
        id: 1,
        name: "Khóa Học HTML & CSS"
    },
    {
        id: 2,
        name: "Khóa học Javascript"
    },
    {
        id: 3,
        name: "Khóa học ReactJS"
    }
]
function FakeChatApp(){
    const [post, setPost] = useState();
    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-id-${post}`, handleComment);
        return () => {
            window.removeEventListener(`lesson-id-${post}`, handleComment);
        }
    }, [post])
    return(<div className='chatapp_fake'>
        <ul>
        {courses.map(course => (
            <li key={course.id}
            style={course.id === post ? {color: "red"} : {color: "blue"}} 
            onClick={()=>setPost(course.id)}>
                {course.name}
            </li>
        ))}
        </ul>
    </div>)
}
export default FakeChatApp;