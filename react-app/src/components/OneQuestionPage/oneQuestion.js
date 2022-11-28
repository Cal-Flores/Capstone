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
        <div className='oneholder'>
            <div className='onecontainer'>
                <div className='onewrapper'>
                    <div className='onecont'>
                        <div className='qadiv'>
                            <h1 className='onetitle'>{question.title}</h1>
                            <div className='onepara'>{question.body}</div>
                            <form onSubmit={handleSub}>
                                <div className='comboxcont'>
                                    <div className='comboxwrapper'>
                                        <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
                                        <input className='comfield' required minlength='2' maxlength='250' type='text' placeholder='Add a comment up to 250 characters...' value={body} onChange={(e) => setBody(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <button className='adcombtn' type='submit'>Add Comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {answers?.length > 1 ?
                        (answers.map(answer => (
                            <>
                                <div>
                                    <OnePageAnswers answer={answer} />
                                </div>
                            </>
                        ))) : (<div></div>)
                    }
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
