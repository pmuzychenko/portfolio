import React from 'react';
import styles from './ModalWindow.module.scss'

const HiringModal = ({active, setActive, children}) => {
    return (
        <div className={`${active ? styles.modal + ' ' + styles.active : styles.modal}`} onClick={() => setActive(false)}>
            <div className={`${active ? styles.modalContent + ' ' + styles.activeContent : styles.modalContent}`}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default HiringModal;