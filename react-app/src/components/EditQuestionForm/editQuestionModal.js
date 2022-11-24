import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditQuestionForm from './editQuestionForm';



function EditQuestionFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditQuestionForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditQuestionFormModal;
