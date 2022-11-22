import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNewQuestion, getAllQuestions } from '../../store/questions'


function QuestionForm() {
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

        return history.push('/')
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
                <input type='text' placeholder='Image Url' value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Add Question</button>
            </div>
        </form>
    )
}

export default QuestionForm
