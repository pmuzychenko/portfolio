import React from 'react'
import styles from './Skills.module.scss';
import Skill from './skill/Skill';
import Title from '../common/components/title/Title';
import {faBriefcase, faLaptopCode, faTasks} from '@fortawesome/free-solid-svg-icons';
import {faSketch} from '@fortawesome/free-brands-svg-icons';

function Skills() {
    return (
        <div className={styles.skillsBlock} id='skills'>
            <div className={styles.skillsContainer}>
                <Title title={'My Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'Development'} description={"React, Redux, AXIOS etc"} titleIcon={faLaptopCode}/>
                    <Skill title={'Foundation'} description={"JavaScript, TypeScript, HTML5, CSS3, English - B2"} titleIcon={faBriefcase}/>
                    <Skill title={'Testing'} description={"Unit Tests, SnapShot, Storybook"} titleIcon={faTasks}/>
                    <Skill title={'Design'} description={"Material UI, TailwindCSS etc"} titleIcon={faSketch}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;