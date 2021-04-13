import React from 'react'
import stylesContainer from '../common/styles/Container.module.css'
import styles from './Vacancy.module.css'
import Title from "../common/title/Title";
import Button from "../common/button/Button";

function Vacancy() {
    return (
        <div className={styles.vacancyBlock}>
            <div className={`${stylesContainer.container} ${styles.vacancyContainer}`}>
                <Title title={'I Am Available For Freelance'}/>
                <Button title={'hire me'}/>
            </div>
        </div>
    );
}

export default Vacancy;