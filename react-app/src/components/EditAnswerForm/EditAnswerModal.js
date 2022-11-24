import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAnswerForm from './editAnswerForm';



function EditAnswerFormModal({ a }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAnswerForm setShowModal={setShowModal} a={a} />
                </Modal>
            )}
        </>
    );
}

export default EditAnswerFormModal;
