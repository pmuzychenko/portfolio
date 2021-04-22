import React, {useState} from 'react';
import styles from './Vacancy.module.scss'
import Title from '../common/components/title/Title';
import Button from '../common/components/button/Button';
import HiringModal from '../common/components/modalWindow/ModalWindow';

function Vacancy() {
    const [activeModal, setActiveModal] = useState(false)

    const handlerModal = () => {
        setActiveModal(true)
    }

    return (
        <div className={styles.vacancyBlock}>
            <div className={styles.vacancyContainer}>
                <Title title={'I Am Available For Freelance'}/>
                <Button title={'hire me'} onClick={handlerModal}/>
                <HiringModal active={activeModal} setActive={setActiveModal}>
                    <div>
                        <div className={styles.header}>
                            <h4>Do you have a project?</h4>
                            <p>I’m ready to help you. You just have to type details below.</p>
                        </div>
                        <form className={styles.form}>
                            <div className={styles.inputBlock}>
                                <input type="text" placeholder="Your Name"/>
                                <input type="text" placeholder="Project's title"/>
                                <input type="email" placeholder="Please enter Your Email"/>
                            </div>
                            <textarea placeholder="Your Message..."/>
                            <Button title={'Send details'}/>
                        </form>
                    </div>
                </HiringModal>
            </div>
        </div>
    );
}

export default Vacancy;