import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getUserAnswers } from '../../store/answers'
import { getUserQuestions } from '../../store/questions'
import OwnerQuestionCard from '../Your-Questions/your-questions'

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
                <h1>Your questions mate</h1>
                {questions?.map(question => (
                    <div>
                        <OwnerQuestionCard question={question} />
                    </div>
                ))}
            </div>
            <div>

            </div>
            {answers?.map(answer => (
                <div>
                    {/* <OwnerAnswerCard answer={answer} /> */}
                </div>
            ))}
        </div>

    )
}


export default OwnerQuestions
