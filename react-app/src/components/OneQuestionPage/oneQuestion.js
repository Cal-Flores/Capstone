import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getAllReviews } from '../../store/answers'
import { getOneProduct } from '../../store/questions'

function SingleQuestion() {
    const dispatch = useDispatch()
    const { questionId } = useParams()
    const question = useSelector(state => state.questions)
    const answers = useSelector(state => state.answers.Answers)
    const users = useSelector(state => state)
    console.log('these are all my users', users)


    useEffect(() => {
        dispatch(getOneProduct(questionId)).then(() => dispatch(getAllReviews(questionId)))
    }, [dispatch])
    return (
        <div>
            <div>
                <h1>{question.title}</h1>
                <div>{question.body}</div>
                <div>##########################</div>
            </div>
            <div>
                {answers?.map(answer => (
                    <div>
                        <div>{answer?.body}</div>
                        <div>{answer?.user_id}</div>
                        <div>#######################</div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default SingleQuestion
