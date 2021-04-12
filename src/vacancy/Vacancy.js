import React from 'react'
import stylesContainer from '../common/styles/Container.module.css'
import styles from './Vacancy.module.css'
import Title from "../common/title/Title";

function Vacancy() {
    return (
        <div className={styles.vacancyBlock}>
            <div className={`${stylesContainer.container} ${styles.vacancyContainer}`}>
                <Title title={'I Am Available For Freelance'}/>
                <button>HIRE ME</button>
            </div>
        </div>
    );
}

export default Vacancy;