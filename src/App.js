import "./App.css";
import ExCLSX from "./CLSX/ExCLSX";
import UpDown from "./Components/useState/UpDown";
import { IndexEcho } from "./CSS_Module";
// import HandleVideos from "./Components/useImperativeHandle/HandleVideos";
// import { useState } from 'react';
// import ThemeContext from './Components/useContext/ThemeContext';
// import ThemeControl from './Components/useContext/ThemeControl';
// import {StoreConvider} from './Components/storeCR';
// import Todo from './Components/todoCR/Todo';
function App() {
  // const [show, setShow] = useState(false);
  return (
    <div className="App" style={{padding: 20}}>
        {/* <button onClick={()=>setShow(!show)}>Show</button>
        {show && <TodoReducer/>} */}
        {/* <ThemeContext>
          <ThemeControl/>
        </ThemeContext> */}
        {/* <StoreConvider>
            <Todo/>
        </StoreConvider> */}
        {/* <HandleVideos/> */}
        {/* <IndexEcho/>
        <ExCLSX/> */}
        <UpDown/>
    </div>
  );
}

export default App;
