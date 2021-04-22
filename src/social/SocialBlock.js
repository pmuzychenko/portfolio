import React from 'react';
import styles from './SocialBlock.module.scss';
import Title from '../common/components/title/Title';


function SocialBlock() {
    return (
        <div className={styles.socialBlock} id={'links'}>
            <Title title={'Take a look at'}/>
            <ul className={styles.socialLinks}>
                <li><a href={'https://www.linkedin.com/in/pavel-muzychenko/'} target={'_blank'} rel="noreferrer">LinkedIn</a></li>
                <li><a href={'https://github.com/pmuzychenko'} target={'_blank'} rel="noreferrer">GitHub</a></li>
                <li><a href={'https://www.codewars.com/users/pmuzychenko'} target={'_blank'} rel="noreferrer">Codewars</a></li>
            </ul>
        </div>
    );
}
export default SocialBlock;