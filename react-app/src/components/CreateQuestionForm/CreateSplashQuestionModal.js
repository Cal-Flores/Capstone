import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux'
import QuestionForm from './questionForm';


function CreateSplashQuestionFormModal() {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user)

    return (
        <>
            <div onClick={() => setShowModal(true)}>
                <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
                <input type='text' disabled={true} placeholder='What do you want to ask?' />
                <div>Ask icon</div>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <QuestionForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateSplashQuestionFormModal;
