import React from 'react'
import DataBlock from "./DataBlock/DataBlock";
import styles from './ContactsData.module.css';
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faHome} from "@fortawesome/free-solid-svg-icons";

function ContactsData() {
    return (
        <div className={styles.data}>
            <DataBlock iconTitle={faTelegramPlane} contactTitle={'Phone'} data={'+38-067-451-61-94'}/>
            <DataBlock iconTitle={faEnvelope} contactTitle={'Email'} data={'pmuzychenko@gmail.com'}/>
            <DataBlock iconTitle={faHome} contactTitle={'My Location'} data={'Dnipro, Ukraine'}/>
        </div>
    );
}

export default ContactsData;