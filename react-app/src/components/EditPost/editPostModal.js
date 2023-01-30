import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPostForm from './EditpostForm';




function EditPostModal({ post }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='yqubtn' onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditPostForm setShowModal={setShowModal} post={post} />
                </Modal>
            )}
        </>
    );
}

export default EditPostModal;
