import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getOneProduct } from '../../store/questions'

function SingleQuestion() {
    const dispatch = useDispatch()
    const { questionId } = useParams()
    const question = useSelector(state => state.questions)


    useEffect(() => {
        dispatch(getOneProduct(questionId))
    }, [dispatch])
    return (
        <div>
            <h1>{question.title}</h1>
            <div>{question.body}</div>
        </div>
    )
}


export default SingleQuestion
