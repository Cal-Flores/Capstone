import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'


function QuestionForm() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')

    return (
        <form>
            <div>
                <input required type='text' placeholder='Question Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <input required type='text' placeholder='Start your question with "What", "How", "Why", etc' value={body} onChange={(e) => setBody(e.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='Question' value={image} onChange={(e) => setImage(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Add Question</button>
            </div>
        </form>
    )
}

export default QuestionForm
