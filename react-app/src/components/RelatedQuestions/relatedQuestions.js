import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { getRelatedQuestions } from '../../store/related'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import SingleQuestion from '../OneQuestionPage/oneQuestion'
import '../OneQuestionPage/oneQuestion.css'


function RelatedQuestions() {
    const dispatch = useDispatch()
    const history = useHistory()
    const questions = useSelector(state => state.related.Related)
    console.log('related questions', questions)

    useEffect(() => {
        dispatch(getRelatedQuestions())
    }, [dispatch])

    const red = (e, questId) => {
        console.log('rq quest it', questId)
        history.push(`/question/${questId}`)
        window.location.reload();
    }
    return (
        <div className='rqfixed'>
            <div className='rqwrapper'>
                <div className='rqtitle'>Related Questions</div>
                {questions?.map(quest => (
                    <div>
                        <div onClick={(e) => red(e, quest.id)} className='navrq'>{quest.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedQuestions
