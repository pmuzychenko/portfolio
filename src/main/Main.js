import React from 'react'
import styles from './Main.module.css';
import stylesContainer from '../common/styles/Container.module.css'
import avatar from '../common/images/avatar.jpg'


function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.greeting}>
                    <h5>Hello, my name is</h5>
                    <h1>Pavel Muzychenko</h1>
                    <h5>Front-end Developer based in #Dnipro, Ukraine</h5>
                </div>
                <div className={styles.photo}>
                    <img src={avatar} alt="Pavel Muzychenko" />
                </div>
            </div>
        </div>
    );
}
export default Main;