import React from 'react'
import styles from './DataBlock.module.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function DataBlock({iconTitle, contactTitle, data}) {
    return (
        <div className={styles.dataBlock}>
            <div className={styles.icon}>
                <FontAwesomeIcon icon={iconTitle}/>
            </div>
            <div className={styles.description}>
                <h4>{contactTitle}</h4>
                <span>{data}</span>
            </div>
        </div>
    );
}

export default DataBlock;