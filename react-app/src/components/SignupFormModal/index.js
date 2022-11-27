import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';
import '../NavBar.css'

function SignUpFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="outbtn" onClick={() => setShowModal(true)}>Sign up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SignUpFormModal;
