import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import OnePageAnswers from '../OnePageAnswers/onePageAnswers'
import { createNewAnswer, getAllReviews } from '../../store/answers'
import { getAllQuestions, getOneProduct, getRelatedQuestions } from '../../store/questions'
import './oneQuestion.css'
import RelatedQuestions from '../RelatedQuestions/relatedQuestions'

function SingleQuestion() {
    const dispatch = useDispatch()
    const { questionId } = useParams()
    const question = useSelector(state => state.questions)
    const user = useSelector(state => state.session.user)
    const answers = useSelector(state => state.answers.Answers)
    //console.log('seeds done here my answers', answers)
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    const [error, setError] = useState([])


    useEffect(() => {
        dispatch(getOneProduct(questionId)).then(() => dispatch(getAllReviews(questionId)))
    }, [dispatch])

    useEffect(() => {
        let err = []

        if (body.length == 700) err.push('700 character limit reached, please submit')
        if (body.length == 690) err.push('10 characters left')
        if (body.length == 650) err.push('50 characters left')

        setError(err)
    }, [body])


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
        <div className='oneholder'>
            <div className='onecontainer'>
                <div className='onewrapper'>
                    <div className='onecont'>
                        <div className='qadiv'>
                            <h1 className='onetitle'>{question.title}</h1>
                            <div className='onepara'>{question.body}</div>
                            <form onSubmit={handleSub}>
                                {error.length > 0 && (
                                    <ul className='comerr'>{error.map((err, i) => (
                                        <li key={i}>{err}</li>
                                    ))}
                                    </ul>
                                )}
                                <div className='comboxcont'>
                                    <div className='comboxwrapper'>
                                        <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
                                        <input className='comfield' required minlength='2' maxlength='700' type='text' placeholder='Add a comment up to 700 characters...' value={body} onChange={(e) => setBody(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <button className='adcombtn' type='submit'>Add Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {answers?.map(answer => (
                        < OnePageAnswers answer={answer} />
                    ))}
                    <div>
                    </div>
                </div>
            </div>
            <div className='.rqcontainer'>
                <RelatedQuestions />
            </div>
        </div>
    )
}


export default SingleQuestion
