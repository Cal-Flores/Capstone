import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewPost, getAllPosts, updatePost } from '../../store/posts'



function EditPostForm({ post, setShowModal }) {
    console.log('this os A', post)
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState(post?.body)
    const [image, setImage] = useState(post?.image)
    const [type, setType] = useState(post?.type)
    const [error, setError] = useState([])

    useEffect(() => {
        let err = []
        if (body?.length > 2500 || body?.length < 4) err.push('Body must be between 4 and 2500 characters')
        setError(err)

    }, [body])

    const handleSubmit = (e) => {
        e.preventDefault()

        let newPost = {
            body,
            image,
            type
        }
        dispatch(updatePost(newPost, post.id)).then(() => dispatch(getAllPosts()))
        setShowModal(false)
        return history.push('/your-contents')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='qumodalcontainer'>
                {error.length > 0 && (
                    <ul className="error-map">{error.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
                    </ul>
                )}
                <div className='qmodalwrapper'>
                    <div className='qdiv'>
                        <input className='q1input' required minlength='4' type='text' placeholder='Post Image Url' value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>
                    <div className='qdiv'>
                        <textarea contendable className='q2input' required minlength='4' maxlength='2501' type='text' placeholder='Say something...' value={body} onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div className='cancelmodal'>
                        <div>
                            <button className='qmbtn' disabled={!!error.length} type='submit'>Create Post</button>
                        </div>
                        <div onClick={() => setShowModal(false)} className='canceltxt'>Cancel</div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditPostForm
