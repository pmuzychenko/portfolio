import React from 'react'
import styles from './Projects.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import Title from "../common/title/Title";

function Projects() {
    return (
        <div className={styles.projectsBlock} id={'projects'}>
            <div className={`${stylesContainer.container} ${styles.projectsContainer}`}>
                <div className={styles.title}>
                    <Title title={'My Projects'}/>
                </div>

                <div className={styles.projects}>
                    <div className={styles.mainSecond}>
                        <div className={styles.secondSmall}>
                            <Project title={"The Social Network"} description={"Project description will be here "}
                                     link={"link #1"} titleLink={"here will be img-link"}/>
                        </div>
                        <div className={styles.secondBig}>
                            <Project title={"Todolist"} description={"Project description will be here"}
                                     link={"link #2"} titleLink={"here will be img-link"}/>
                        </div>
                    </div>

                    <div className={styles.mainSecond}>
                        <div className={styles.secondBig}>
                            <Project title={"The Social Network"}
                                     description={"Project description will be here"}
                                     link={"link #4"} titleLink={"here will be img-link"}/>
                        </div>
                        <div className={styles.secondSmall}>
                            <Project title={"Counter"} description={"Project description will be here"}
                                     link={"link #3"} titleLink={"here will be img-link"}/>
                        </div>
                    </div>


                    <div className={styles.mainSecond}>
                        <div className={styles.secondSmall}>
                            <Project title={"Friday Project"}
                                     description={"Project description will be here"}
                                     link={"link #5"} titleLink={"here will be img-link"}/>
                        </div>
                        <div className={styles.secondBig}>
                            <Project title={"Friday Project"}
                                     description={"Project description will be here"}
                                     link={"link #6"} titleLink={"here will be img-link"}/>
                        </div>
                    </div>

                    <div className={styles.mainSecond}>
                        <div className={styles.secondBig}>
                            <Project title={"The Social Network"}
                                     description={"Project description will be here"}
                                     link={"link #1"} titleLink={"here will be img-link"}/>
                        </div>
                        <div className={styles.secondSmall}>
                            <Project title={"Todolist"} description={"Project description will be here"}
                                     link={"link #2"} titleLink={"here will be img-link"}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;