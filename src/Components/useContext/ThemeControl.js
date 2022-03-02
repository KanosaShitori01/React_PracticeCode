import Content from './Content';
import {useContext} from 'react';
import { ThemeMainContext } from './ThemeContext';
function ThemeControl(){
    const context = useContext(ThemeMainContext);
    return(<div className="themeControl">
        <button onClick={context.handleTheme}>Toggle Theme</button>
        <Content/>
    </div>)
}
export default ThemeControl;