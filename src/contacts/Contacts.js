import React from 'react'
import styles from './Contacts.module.css';
import Form from "./form/Form";
import Title from "../common/title/Title";
import ContactsData from "./form/ContactsData/ContactsData";


function Contacts() {
    return (
        <div className={styles.contactsBlock} id={'contacts'}>
            <div className={styles.contactsContainer}>
                <Title title={'GET IN TOUCH'}/>
                <div className={styles.formAndData}>
                   <ContactsData/>
                    <Form/>
                </div>

            </div>
        </div>
    );
}

export default Contacts;