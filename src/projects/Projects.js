import React from 'react';
import styles from './Projects.module.scss';
import {Project} from './project/Project';
import Title from '../common/components/title/Title';
import imgSocialNetwork from '../assets/images/socialNetwork_.jpg';
import imgTodolist from '../assets/images/todolist_.jpg';
import imgCounter from '../assets/images/counter_.jpg';
import imgFridayProject from '../assets/images/Friday_project.jpg';
import imgFutureProject from '../assets/images/future_project.jpg';
import imgFutureProject1 from '../assets/images/future_project1.jpg';
import imgFutureProject2 from '../assets/images/future_project2.jpg';
import imgReactTasks from '../assets/images/react_tasks.jpg';

function Projects() {
    return (
        <div className={styles.projectsBlock} id={'projects'}>
            <div className={styles.projectsContainer}>
                <Title title={'My Projects'}/>
                <div className={styles.projects}>

                    <Project title={"React Tasks"}
                             img={imgReactTasks}
                             description={"React, Redux, TS, RestAPI, Thunk, Unit Tests"}
                             linkDemo={"https://pmuzychenko.github.io/react-homeworks"}
                             linkCode={"https://github.com/pmuzychenko/react-homeworks"}/>

                    <Project title={"Todolist"}
                             img={imgTodolist}
                             description={"React, Redux, TS, RestAPI, Thunk, Material UI, Unit Tests"}
                             linkDemo={"https://pmuzychenko.github.io/todolist-training"}
                             linkCode={"https://github.com/pmuzychenko/todolist-training"}/>

                    <Project title={"Counter"}
                             img={imgCounter}
                             description={"React, Redux, TS"}
                             linkDemo={"https://pmuzychenko.github.io/counter-with-settings"}
                             linkCode={"https://github.com/pmuzychenko/counter-with-settings"}/>

                    <Project title={"Friday project"}
                             img={imgFridayProject}
                             description={"Team project: React, Redux, TS, RestAPI, Thunk, Material UI"}
                             linkDemo={"https://pmuzychenko.github.io/friday-cards-project/"}
                             linkCode={"https://github.com/pmuzychenko/friday-cards-project"}/>

                    <Project title={"Future Project"}
                             img={imgFutureProject}
                             description={"...in progress"}
                             linkDemo={"https://github.com/pmuzychenko"}
                             linkCode={"https://github.com/pmuzychenko/friday-cards-project"}/>

                    <Project title={"Future Project"}
                             img={imgFutureProject1}
                             description={"...in progress"}
                             linkDemo={"https://github.com/pmuzychenko"}
                             linkCode={"https://github.com/pmuzychenko"}/>

                    <Project title={"Future Project"}
                             img={imgFutureProject2}
                             description={"...in progress"}
                             linkDemo={"https://github.com/pmuzychenko"}
                             linkCode={"https://github.com/pmuzychenko"}/>

                    <Project title={"The Social Network"}
                             img={imgSocialNetwork}
                             description={"React, Redux, TS, RestAPI, Thunk"}
                             linkDemo={"https://github.com/pmuzychenko/social-network-ts"}
                             linkCode={"https://github.com/pmuzychenko/social-network-ts"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;