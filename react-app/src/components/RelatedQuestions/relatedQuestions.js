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
    const questions = useSelector(state => state.related.Related)
    console.log('related questions', questions)

    useEffect(() => {
        dispatch(getRelatedQuestions())
    }, [dispatch])

    const red = () => {
        window.location.reload();
    }
    return (
        <div className='rqfixed'>
            <div className='rqwrapper'>
                <div className='rqtitle'>Related Questions</div>
                {questions?.map(quest => (
                    <div className='rqnavwrap' onClick={red}>
                        <NavLink className='navrq' to={`/question/${quest.id}`}>{quest.title}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RelatedQuestions
