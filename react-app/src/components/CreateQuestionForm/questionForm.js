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
            <div>
                <input required minlength='5' maxlength='100' type='text' placeholder='Question Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <textarea required minlength='5' maxlength='750' type='text' placeholder='Start your question with "What", "How", "Why", etc' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Add Question</button>
            </div>
        </form>
    )
}

export default QuestionForm
