import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../SignupFormModal/SignUpForm';
import LoginForm from './LoginForm';
import '../NavBar.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className="outbtn" onClick={() => setShowModal(true)}>Login in</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
