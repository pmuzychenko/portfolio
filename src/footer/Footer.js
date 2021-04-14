import React from 'react'
import styles from './Footer.module.css';


function Footer() {
    return (
        <div className={styles.footerBlock}>
                <p className={styles.copyRight}>© 2021. All right reserved.</p>
        </div>
    );
}

export default Footer;