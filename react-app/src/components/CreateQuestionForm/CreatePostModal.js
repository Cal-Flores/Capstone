import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import '../NavBar.css'
import PostForm from './CreatePostForm';


function CreatePostFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>
                <i class="fa-solid fa-pencil"></i> Post
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreatePostFormModal;
