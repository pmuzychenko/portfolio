import React from 'react'
import styles from './Button.module.scss';

function Button({title,onClick}) {
    return (
        <div>
            <button className={styles.btn} title={title} onClick={onClick}>{title}</button>
        </div>
    );
}

export default Button;