import styles from './style.module.css';
import styleSu from './styleS.module.scss';
import clsx from 'clsx';

function ExCLSX() {
    return (
        <div>
            <button className={clsx(styles.btn, styleSu.bor)}>No Active</button>
            <button className={clsx(styles.btn, {
                [styles.active]: true
            })}><span>Active</span></button>
            <button className={styleSu.dis}>Dis Active</button>
        </div>
    )
}

export default ExCLSX
