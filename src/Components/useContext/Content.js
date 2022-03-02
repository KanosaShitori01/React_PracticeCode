import { useContext } from "react";
import { ThemeMainContext } from './ThemeContext';
function Content() {
    const context = useContext(ThemeMainContext);
    return (
    <div className={`Content ${context.theme}`}>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquam, nemo ipsa! A eligendi aliquam enim quis! 
            Quas nostrum libero repellat debitis esse, recusandae deleniti, 
            impedit nesciunt asperiores repellendus aut itaque.</p>
    </div>)
}
export default Content;