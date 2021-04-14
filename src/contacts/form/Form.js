import React from 'react'
import styles from './Form.module.css';
import Button from "../../common/button/Button";

function Form() {
    return (
        <form className={styles.form}>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="Your Email"/>
            <textarea placeholder="Your Message"/>
            <Button title={'Send Message'}/>
        </form>
    );
}

export default Form;