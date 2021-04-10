import React from 'react'
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <div className={styles.nav}>
            <a href>Home</a>
            <a href>Skills</a>
            <a href>Projects</a>
            <a href>Contacts</a>
        </div>
    );
}

export default Navigation;