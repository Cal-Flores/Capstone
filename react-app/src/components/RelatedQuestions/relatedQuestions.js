import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { getRelatedQuestions } from '../../store/related'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import SingleQuestion from '../OneQuestionPage/oneQuestion'


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
        <div>
            <div>Related Questions</div>
            {questions?.map(quest => (
                <div onClick={red}>
                    <NavLink to={`/question/${quest.id}`}>{quest.title}</NavLink>
                </div>
            ))}
        </div>
    )
}

export default RelatedQuestions
