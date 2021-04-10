import React from 'react'
import styles from './Projects.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";

function Projects() {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects </h2>
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