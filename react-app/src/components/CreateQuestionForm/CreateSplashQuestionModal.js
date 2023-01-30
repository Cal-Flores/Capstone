import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from 'react-redux'
import QuestionForm from './questionForm';
import './splashq.css'
import LoginFormModal from '../LoginFormModal';
import CreatePostFormModal from './CreatePostModal';


function CreateSplashQuestionFormModal() {
    const [showModal, setShowModal] = useState(false);
    const user = useSelector(state => state.session.user)

    const askhelp = () => {
        setShowModal(true)
    }


    return (
        <>
            <div className='askqcont'>
                <div className='askqsplash'>
                    <div className='askboxwrapper'>
                        <div className='askwrap'>
                            <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
                            <div onClick={askhelp}>
                                <input className='askqfield' type='text' disabled={true} placeholder='What do you want to ask or share?' />
                            </div>
                        </div>
                        <button onClick={askhelp} className='askfavi'>
                            <i class="fa-regular fa-message"></i> Ask
                        </button>
                        <button className='askfavi'>
                            <CreatePostFormModal />
                        </button>
                    </div>
                </div>
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
