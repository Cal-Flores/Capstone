import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditQuestionForm from './editQuestionForm';



function EditQuestionFormModal({ q }) {
    console.log('stinky amy', q)
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditQuestionForm setShowModal={setShowModal} q={q} />
                </Modal>
            )}
        </>
    );
}

export default EditQuestionFormModal;
