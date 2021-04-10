import React from 'react'
import styles from './Footer.module.css';
import stylesContainer from '../common/styles/Container.module.css'


function Footer() {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <a href={'#home'}>
                    <h2 className={styles.title}> Pavel Muzychenko </h2>
                </a>
                <ul className={styles.socialLinks}>
                    <li><a href={'git'}>Git</a></li>
                    <li><a href={'codewars'}>Codewars</a></li>
                    <li><a href={'linkedIn'}>LinkedIn</a></li>
                </ul>
                <p className={styles.copyRight}>©2021, All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;