import React from 'react'
import styles from './Navigation.module.scss';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import { Link } from 'react-scroll';

function Navigation() {
    const items = ['home', 'skills', 'projects', 'contacts', 'links']
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
                    offset={1}
                    duration={500}
                >{item}</Link>
            )}
                <BurgerMenu items={items}/>
            </div>
        </div>
    );
}

export default Navigation;