import React from 'react'
import styles from './Project.module.scss';
import Slide from "react-reveal/Slide";

export const Project = ({img, description, linkDemo, linkCode, title}) => {
    return (
        <Slide bottom>
            <div className={styles.project}>
                <div className={styles.img} style={{backgroundImage: `url(${img})`}}>
                    <div className={styles.overlay}>
                        <div className={styles.description}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <div className={styles.links}>
                                <a href={linkDemo} className={styles.btnDemo} target="_blank" rel="noreferrer">view demo</a>
                                <a href={linkCode} className={styles.btnCode} target="_blank" rel="noreferrer">view code</a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    );
}