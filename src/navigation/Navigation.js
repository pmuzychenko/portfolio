import React from 'react'
import {Link} from "react-scroll";
import styles from './Navigation.module.css';

function Navigation() {
    const items = ['home', 'skills', 'projects', 'contacts']
    return (
        <div className={styles.navigation}>
            <div className={styles.container}>
                {items.map((item, index) =>
                    <Link
                        key={index}
                        className={styles.link}
                        activeClass={styles.active}
                        to={item}
                        spy={true}
                        smooth={true}
                        offset={-99}
                        duration={500}
                    >{item}</Link>
                )}
            </div>
        </div>
    );
}

export default Navigation;