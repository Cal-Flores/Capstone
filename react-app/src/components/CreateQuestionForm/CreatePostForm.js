import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewPost, getAllPosts } from '../../store/posts'



function PostForm({ setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [body, setBody] = useState('')
    const [image, setImage] = useState(null)
    const [type, setType] = useState('post')
    const [imageLoading, setImageLoading] = useState(false);
    const [error, setError] = useState([])

    useEffect(() => {
        let err = []
        if (body.length > 2500 || body.length < 4) err.push('Body must be between 4 and 2500 characters')
        setError(err)

    }, [body])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let newPost = {
            body,
            type,
        }
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/posts/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            let data = await res.json();
            newPost.image = data.images
            console.log('something amazing happened!', data.images)
            //history.push("/images");
            let cala = await dispatch(createNewPost(newPost)).then(() => dispatch(getAllPosts()))
            if (cala) {
                console.log('dispatches were made bro using this', newPost)
            }
            setImageLoading(false);
            setShowModal(false)
            window.location.reload()
            return history.push('/')
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("something bad happened");
        }


    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
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
                        {/* <input className='q1input' required minlength='4' type='text' placeholder='Post Image Url' value={image} onChange={(e) => setImage(e.target.value)} /> */}
                        <input
                            className='choosefile'
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                        />
                        {/* <button type="submit">Submit</button> */}
                        {(imageLoading) && <p className='choosefile'>Loading...</p>}
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

export default PostForm
