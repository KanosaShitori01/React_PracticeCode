import {useEffect, useState} from 'react';
/*
1. useEffect(callback)
- Gọi callback mỗi khi component re-render
- Gọi callback sau khi component thêm element vào DOM 
2. useEffect(callback, [])
- Chỉ gọi callback một lần sau khi component mounted
3. useEffect(callback, [deps])
- Callback sẽ được gọi mỗi lần deps thay đổi 
--------------------------------------------------------
1. Callback luôn được gọi sau khi component mounted 
2. Cleanup function luôn được gọi trước khi component unmounted
3. Cleanup function luôn được gọi trước khi callback được gọi (trước khi mounted)
*/
const tabs = ['posts', 'comments', 'albums'];
function ApiEffect(){
    const [posts, setPost] = useState([]);
    const [type, setType] = useState("posts");
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(respone => respone.json())
            .then(post => {
                setPost(post);
            })
    },[type])
    return(
    <div className="showInfor" style={{padding: "10px 0"}}>
        <div className='showInfor_choose'>
            {tabs.map((tab,index) => (
                <button onClick={()=>setType(tab)} key={index}>{tab}</button>
            ))}
        </div>
        <div className='showInfor_out'>
            <ul>
            {posts.map((post)=>(
                <li>{post.title || post.name}</li>    
            ))}
            </ul>
        </div>
    </div>)
}
export default ApiEffect;