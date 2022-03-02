import { useState } from 'react';
/*
Lưu ý
    1. Array 
    2. Reference types
Ví dụ
    1. Random Gift
    2. Two-way Binding
    3. TodoList
*/
const gifts = [
    'CPU 19',
    'RAM 32GB RGB',
    'RGB Keybroad'
];
function ThreeExample() {
    const [gift, setGift] = useState();
    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);
        setGift(gifts[index]);
    }
    return (
        <div className="exampleBox" style={{padding: 20}}>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>
            <button onClick={randomGift}>Lấy Thưởng</button>
        </div>
    );
}

export default ThreeExample;
