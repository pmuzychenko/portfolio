import React from 'react'
import styles from './Vacancy.module.scss'
import Title from "../common/components/title/Title";
import Button from "../common/components/button/Button";

function Vacancy() {
    return (
        <div className={styles.vacancyBlock}>
            <div className={styles.vacancyContainer}>
                <Title title={'I Am Available For Freelance'}/>
                <Button title={'hire me'}/>
            </div>
        </div>
    );
}

export default Vacancy;