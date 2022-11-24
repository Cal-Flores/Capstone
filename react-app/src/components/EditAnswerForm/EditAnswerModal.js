import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditAnswerForm from './editAnswerForm';



function EditQuestionFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAnswerForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditQuestionFormModal;
