import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getUserQuestions } from '../../store/questions'
import OwnerQuestionCard from '../Your-Questions/your-questions'

function OwnerQuestions() {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.Questions)
    console.log('these are my user questions', questions)

    useEffect(() => {
        dispatch(getUserQuestions())
    }, [dispatch])
    return (
        <div>
            <h1>Your questions mate</h1>
            {questions?.map(question => (
                <OwnerQuestionCard question={question} />
            ))}
        </div>

    )
}


export default OwnerQuestions
