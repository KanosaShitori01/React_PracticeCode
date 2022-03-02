import {useState, useCallback} from 'react';
import MemoContent from './MemoContent';
function CountUp(){
    const [count_up, setCountUp] = useState(0);
    // Ở trường hợp này, ta sử dụng useCallback để khắc phục việc 
    // hàm này bị re-render và làm mới lại gây mâu thuẫn với memo bên MemoContent 
    // bằng cách gọi lại 1 function cũ duy nhất nhằm khai trừ việc tái tạo lại giá trị mới cho Component
    // mỗi khi re-render  
    const handleCountUp = useCallback(() => {
        setCountUp(count => count + 1);
    }, []);
    return(<div className="countUp">
        {/* Vĩ đã sử dụng Memo nên Component
         MemoContent sẽ không bị re-render một cách dư thừa */}
        <MemoContent onCountUp={handleCountUp}/>
        <h1>{count_up}</h1>
    </div>)
}
export default CountUp;