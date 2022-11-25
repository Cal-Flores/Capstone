import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import OnePageAnswers from '../OnePageAnswers/onePageAnswers'
import { createNewAnswer, getAllReviews } from '../../store/answers'
import { getAllQuestions, getOneProduct, getRelatedQuestions } from '../../store/questions'

function SingleQuestion() {
    const dispatch = useDispatch()
    const { questionId } = useParams()
    const question = useSelector(state => state.questions)
    console.log('single question ==', question)
    const answers = useSelector(state => state.answers.Answers)
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')


    useEffect(() => {
        dispatch(getOneProduct(questionId)).then(() => dispatch(getAllReviews(questionId)))
    }, [dispatch])




    const handleSub = (e) => {
        e.preventDefault()

        let newAnswer = {
            body,
            image
        }

        dispatch(createNewAnswer(questionId, newAnswer)).then(() => dispatch(getAllReviews(questionId)))
        setBody('')
    }

    return (
        <div>
            <div>
                <h1>{question.title}</h1>
                <div>{question.body}</div>
                <form onSubmit={handleSub}>
                    <div>
                        <input required minlength='2' maxlength='500' type='text' placeholder='Add a comment...' value={body} onChange={(e) => setBody(e.target.value)} />
                    </div>
                    <div>
                        <button type='submit'>Add Comment</button>
                    </div>
                </form>
                <div>##########################</div>
            </div>
            <div>
                {answers?.map(answer => (
                    <div>
                        <OnePageAnswers answer={answer} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SingleQuestion
