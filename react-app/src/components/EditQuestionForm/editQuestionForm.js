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
    const [error, setError] = useState([])

    useEffect(() => {
        let err = []

        if (title.length >= 100 || title.length < 4) err.push('Title must be between 4 and 100 characters')
        if (body.length >= 750 || body.length < 6) err.push('Body must be between 5 and 2000 characters')
        setError(err)

    }, [body, title])


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
            {error.length && (
                <ul className="error-map">{error.map((err, i) => (
                    <li key={i}>{err}</li>
                ))}
                </ul>
            )}
            <div>
                <input required minlength='4' maxlength='101' type='text' placeholder='Question Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <textarea required minlength='4' maxlength='751' type='text' placeholder='Start your question with "What", "How", "Why", etc' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <button disabled={!!error.length} type='submit'>Add Question</button>
            </div>
        </form>
    )
}

export default EditQuestionForm
