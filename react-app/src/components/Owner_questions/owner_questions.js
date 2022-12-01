import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getUserAnswers } from '../../store/answers'
import { getUserQuestions } from '../../store/questions'
import OwnerQuestionCard from '../Your-Questions/your-questions'
import OwnerAnswerCard from '../Owner_answer_card/owner_answer_card'
import './owner_questions.css'

function OwnerQuestions() {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.Questions)
    const answers = useSelector(state => state.answers.answers)
    console.log('these are my user answers bigs', answers)

    useEffect(() => {
        dispatch(getUserQuestions()).then(() => dispatch(getUserAnswers()))
    }, [dispatch])
    return (
        <div>
            <div>
                <div className='yccontainer'>
                    <h1 className='ycheader'>Your Content</h1>
                </div>
                {questions?.map(question => (
                    <div>
                        <OwnerQuestionCard question={question} />
                    </div>
                )).reverse()}
            </div>
            <div>

            </div>
            {answers?.map(answer => (
                <div>
                    <OwnerAnswerCard answer={answer} />
                </div>
            )).reverse()}
        </div>

    )
}


export default OwnerQuestions
