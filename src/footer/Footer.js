import React from 'react'
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footerBlock}>
                <p className={styles.copyRight}>©2021, All Rights Reserved.</p>
        </div>
    );
}

export default Footer;