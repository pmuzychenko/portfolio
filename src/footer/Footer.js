import React from 'react'
import styles from './Footer.module.scss';


function Footer() {
    return (
        <div className={styles.footerBlock}>
                <p className={styles.copyRight}>© 2021. All rights reserved.</p>
        </div>
    );
}

export default Footer;