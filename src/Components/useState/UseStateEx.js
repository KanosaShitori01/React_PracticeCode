import { useState } from 'react';

// const orders = [100, 200, 300];

function UseStateEx() {
  //1. Chức năng thay đổi mã số cho nút Increase.
    // const [counter, setCounter] = useState(() => {
    //   const total = orders.reduce((total, cur) => total + cur);
    //   return total;
    // });
    // const handleIncrease = () => {
    //     setCounter(prevState => prevState + 1)
    //     setCounter(prevState => prevState + 1)
    //     setCounter(prevState => prevState + 1)
    // }
    const [infor, setInfor] = useState({
        name: 'Nguyen Van A',
        age: 18,
        address: 'Ha Noi, VN'
    })
    const handleUpdate = () => {
      // Không logic
        // setInfor({
        //     ...infor,
        //     bio: 'Yeu mau hong ^^'
        // })
      // Logic 
        setInfor(prevInfor => 
          // ...Logic Code
          ({
            ...prevInfor,
            bio: 'Yêu màu hồng ^^'
          })
        )
    }
  return (
    <div className="mainStateBox" style={{padding: 20}}>
        { // Thay đổi mã số
        /* <h1>{counter}</h1>
        <button onClick={handleIncrease}>Increase</button> */}
        <h1>{JSON.stringify(infor)}</h1>
        <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default UseStateEx;
