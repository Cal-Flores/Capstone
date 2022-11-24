import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getUserAnswers, updateAnswer } from '../../store/answers'


function EditAnswerForm({ a, setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { answerId } = useParams()

    const answers = useSelector(state => state.answers.answers)
    const answer = answers?.filter(answer => answer?.id == answerId)[0]
    const [body, setBody] = useState(a?.body)
    const [image, setImage] = useState(a?.image)


    const handleSub = async (e) => {
        e.preventDefault()

        let newAnswer = {
            body,
            image
        }

        dispatch(updateAnswer(newAnswer, a.id)).then(() => dispatch(getUserAnswers()))
        setShowModal(false)
        history.push('/your-questions')
    }
    return (
        <form onSubmit={handleSub}>
            <div>
                <input required type='text' placeholder='Add a comment...' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Add Comment</button>
            </div>
        </form>
    )
}

export default EditAnswerForm
