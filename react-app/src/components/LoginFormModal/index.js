import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../SignupFormModal/SignUpForm';

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Login in</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
