import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import QuestionForm from './questionForm';
import '../NavBar.css'


function CreateQuestionFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='addqnav' onClick={() => setShowModal(true)}>Add Question</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestionForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateQuestionFormModal;
