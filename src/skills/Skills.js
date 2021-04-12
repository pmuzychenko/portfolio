import React from 'react'
import styles from './Skills.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}> Skills </h2>
                <div className={styles.skills}>
                    <Skill title ={"Skill title 1"} description={"Skill description 1"}/>
                    <Skill title ={"Skill title 2"} description={"Skill description 2"}/>
                    <Skill title ={"Skill title 3"} description={"Skill description 3"}/>
                    <Skill title ={"Skill title 4"} description={"Skill description 4"}/>
                    <Skill title ={"Skill title 5"} description={"Skill description 5"}/>
                    <Skill title ={"Skill title 6"} description={"Skill description 6"}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;