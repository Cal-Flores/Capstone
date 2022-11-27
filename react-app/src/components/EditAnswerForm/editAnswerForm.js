import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getUserAnswers, updateAnswer } from '../../store/answers'
import './editAnswerForm.css'


function EditAnswerForm({ a, setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { answerId } = useParams()

    const answers = useSelector(state => state.answers.answers)
    const answer = answers?.filter(answer => answer?.id == answerId)[0]
    const [body, setBody] = useState(a?.body)
    const [image, setImage] = useState(a?.image)
    const [error, setError] = useState([])

    useEffect(() => {
        let err = []

        if (body.length >= 100 || body.length < 2) err.push('Answer must be between 4 and 100 characters')
        setError(err)

    }, [body])


    const handleSub = async (e) => {
        e.preventDefault()

        let newAnswer = {
            body,
            image
        }

        dispatch(updateAnswer(newAnswer, a.id)).then(() => dispatch(getUserAnswers()))
        setShowModal(false)
        history.push('/your-contents')
    }
    return (
        <form onSubmit={handleSub}>
            <div className='aumodalcontaineredit'>
                {error.length && (
                    <ul className="error-mapans">{error.map((err, i) => (
                        <li key={i}>{err}</li>
                    ))}
                    </ul>
                )}
                <div className='amodalwrapperedit'>
                    <div className='ansdiv'>
                        <textarea className='ansinput' required minlength='2' maxlength='250' type='text' placeholder='Add a comment...' value={body} onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div className='cancelmodalans'>
                        <button className='ansbtn' type='submit' disabled={!!error.length}>Add Comment</button>
                        <div onClick={() => setShowModal(false)} className='canceltxtans'>Cancel</div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default EditAnswerForm
