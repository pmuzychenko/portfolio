import React from 'react'
import styles from './SocialBlock.module.css';
import Title from "../common/title/Title";


function SocialBlock() {
    return (
        <div className={styles.socialBlock}>
            <Title title={'Take a look at'}/>
            <ul className={styles.socialLinks}>
                <li><a href={'git'}>Git</a></li>
                <li><a href={'codewars'}>Codewars</a></li>
                <li><a href={'linkedIn'}>LinkedIn</a></li>
            </ul>
        </div>
    );
}
export default SocialBlock;