import React from 'react'
import styles from './Navigation.module.css';

function Navigation() {
    const items = ['home', 'skills', 'projects', 'contacts', 'activities']
    return (
        <div className={styles.navBlock}>
            <ul className={styles.menu}>
                {items.map((item, index) => {
                    return <li key={index}>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                })}
            </ul>
        </div>
    );
}

export default Navigation;