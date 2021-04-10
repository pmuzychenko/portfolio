import React from 'react'
import styles from './Main.module.css';
import stylesContainer from '../common/styles/Container.module.css'


function Main() {
    return (
        <div className={styles.mainBlock}>
            <div className={stylesContainer.container}>
                <div className={styles.greeting}>
                    <span>Hi There</span>
                    <h1>I am Pavel Muzychenko</h1>
                    <p>A Front-end Developer</p>
                </div>
                <div className={styles.photo}>Photo will be here</div>
            </div>
        </div>
    );
}
export default Main;