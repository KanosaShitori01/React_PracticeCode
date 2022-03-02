import Content from '../Content/Content';
import GlobalStyles from '../GlobalStyles/GlobalStyles';
import echoStyles from './echoSt.module.css';

function Echo() {
    return (
        <GlobalStyles>
            <div className={`${echoStyles.echoMain} center_text`}>
                <h1 className={echoStyles.title}>Echo Alert</h1>
                <Content/>
            </div>
        </GlobalStyles>
    )
}

export default Echo
