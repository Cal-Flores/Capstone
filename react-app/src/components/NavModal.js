import React, { useState } from 'react';
import { Modal } from '../context/Modal'
import './NavBar.css'
import Aboutme from '../components/NavModalcomp';

function AboutModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={(e) => setShowModal(true)}>About</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Aboutme setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default AboutModal;
