import React from 'react'
import styles from './Main.module.scss';
import avatar from '../assets/images/avatar.jpg'


function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={styles.container}>
                <div className={styles.greeting}>
                    <h5>Hello, I'm</h5>
                    <h1>Pavel Muzychenko</h1>
                    <h2>Front-end Developer</h2>
                </div>
                <div className={styles.photo}>
                    <img src={avatar} alt="Pavel Muzychenko"/>
                </div>
            </div>
        </div>
    );
}

export default Main;