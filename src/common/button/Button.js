import React from 'react'
import styles from './Button.module.css';

function Button({title,onClick}) {
    return (
        <div>
            <button className={styles.button} title={title} onClick={onClick}>{title}</button>
        </div>
    );
}

export default Button;