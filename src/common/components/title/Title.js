import React from 'react'
import styles from './Title.module.scss';

function Title(props) {
    return (
        <h2 className={styles.title}>{props.title}</h2>
    )
}
export default Title;