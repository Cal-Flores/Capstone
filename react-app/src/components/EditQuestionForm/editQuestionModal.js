import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditQuestionForm from './editQuestionForm';
import '../Your-Questions/your-questions.css'



function EditQuestionFormModal({ q }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='yqubtn' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditQuestionForm setShowModal={setShowModal} q={q} />
                </Modal>
            )}
        </>
    );
}

export default EditQuestionFormModal;
