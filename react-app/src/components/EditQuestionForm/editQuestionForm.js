import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getAllQuestions, getUserQuestions, updateQuestion } from '../../store/questions'



function EditQuestionForm({ q, setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { questionId } = useParams()

    const questions = useSelector(state => state.questions.Questions)
    const question = questions?.filter(question => question?.id == questionId)[0]
    const [title, setTitle] = useState(q?.title)
    const [body, setBody] = useState(q?.body)
    const [image, setImage] = useState(q?.image)


    const handleSubmit = async (e) => {
        e.preventDefault()

        let newQuestion = {
            title,
            body,
            image
        }

        dispatch(updateQuestion(newQuestion, q.id)).then(() => dispatch(getUserQuestions()))
        setShowModal(false)
        return history.push('/your-questions')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input required type='text' placeholder='Question Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <textarea required type='text' placeholder='Start your question with "What", "How", "Why", etc' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Add Question</button>
            </div>
        </form>
    )
}

export default EditQuestionForm
