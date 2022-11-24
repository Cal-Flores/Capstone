import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteAAnswer, getUserAnswers } from '../../store/answers'
import EditQuestionFormModal from '../EditQuestionForm/editQuestionModal'

function OwnerAnswerCard({ answer }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const redirectme = (e) => {
        e.preventDefault()
        history.push(`question/${answer.question_id}`)
    }

    const deletebtn = async (e) => {
        e.preventDefault()
        dispatch(deleteAAnswer(answer.id)).then(() => dispatch(getUserAnswers()))
    }
    return (
        <div>
            <div onClick={redirectme}>Answer</div>
            <div>{answer.body}</div>
            < EditQuestionFormModal />
            <button onClick={deletebtn}>Delete</button>
            <div>------------------------------------</div>
        </div>
    )
}

export default OwnerAnswerCard
