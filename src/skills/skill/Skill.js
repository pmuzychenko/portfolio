import React from 'react'
import styles from './Skill.module.css';

function Skill(props) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>Place for skill icon</div>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    );
}

export default Skill;