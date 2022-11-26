import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewQuestion, getAllQuestions } from '../../store/questions'


function QuestionForm({ setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState([])

    useEffect(() => {
        let err = []
        if (body.length >= 750 || body.length <= 4) err.push('Body must be between 5 and 2000 characters')
        if (title.length >= 100 || title.length <= 3) err.push('Title must be between 4 and 100 characters')
        setError(err)

    }, [body, title])

    const handleSubmit = (e) => {
        e.preventDefault()

        let newQuestion = {
            title,
            body,
            image
        }
        dispatch(createNewQuestion(newQuestion)).then(() => dispatch(getAllQuestions()))
        setShowModal(false)
        return history.push('/')
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
                <textarea required minlength='5' maxlength='751' type='text' placeholder='Start your question with "What", "How", "Why", etc' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <button disabled={!!error.length} type='submit'>Add Question</button>
            </div>
        </form>
    )
}

export default QuestionForm
