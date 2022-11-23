import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { getAllQuestions } from '../../store/questions'
import QuestionDetail from '../QuestionDetail/questionDetail'

function AllQuestions() {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.Questions)
    const user = useSelector(state => state.session.user)

    console.log('this is all my users', user)

    let loggedin
    let log = false
    if (user) {
        log = true
        loggedin = (<div>Hello {user.username}</div>)
    }



    useEffect(() => {
        dispatch(getAllQuestions())
    }, [dispatch])


    return (
        <div>
            <h1>Hello Quorra</h1>
            <div>
                {log && loggedin}
            </div>
            <div>
                {questions?.map(question => (
                    <QuestionDetail key={question?.id} question={question} />
                ))}

            </div>
        </div>
    )

}

export default AllQuestions
