import React from 'react'
import styles from './Projects.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/title/Title";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <div className={styles.title}>
                    <Title title={'My Projects'}/>
                </div>

                <div className={styles.projects}>
                    <Project title={"Project 1"} description={"Project description will be here "}
                             link={"link #1"} titleLink={"here will be img-link"}/>
                    <Project title={"Project 2"} description={"Project description will be here"}
                             link={"link #2"} titleLink={"here will be img-link"}/>
                    <Project title={"Project 3"} description={"Project description will be here"}
                             link={"link #3"} titleLink={"here will be img-link"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;