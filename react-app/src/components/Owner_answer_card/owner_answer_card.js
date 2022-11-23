import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteAAnswer, getUserAnswers } from '../../store/answers'

function OwnerAnswerCard({ answer }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const editbtn = (e) => {
        e.preventDefault()
        history.push(`/editAnswer/${answer.id}`)
    }
    const deletebtn = async (e) => {
        e.preventDefault()
        dispatch(deleteAAnswer(answer.id)).then(() => dispatch(getUserAnswers()))
    }
    return (
        <div>
            <div>Answer</div>
            <div>{answer.body}</div>
            <button onClick={editbtn}>Edit</button>
            <button onClick={deletebtn}>Delete</button>
            <div>------------------------------------</div>
        </div>
    )
}

export default OwnerAnswerCard
