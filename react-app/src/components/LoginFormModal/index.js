import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../SignupFormModal/SignUpForm';
import LoginForm from './LoginForm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Login in</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;