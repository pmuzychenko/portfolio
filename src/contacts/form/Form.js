import React from 'react'
import styles from './Form.module.css';

function Form() {
    return (
        <form className={styles.form}>
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Your Email"/>
            <textarea placeholder="Your Message"/>
            <button className={styles.btn}>
                Send Message
            </button>
        </form>
    );
}

export default Form;