import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteAQuestion, getUserQuestions } from '../../store/questions'
import EditQuestionFormModal from '../EditQuestionForm/editQuestionModal'

function OwnerQuestionCard({ question }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const editbtn = (e) => {
        e.preventDefault()
        history.push(`/editQuestion/${question.id}`)
    }
    const deletebtn = async (e) => {
        e.preventDefault()
        dispatch(deleteAQuestion(question.id)).then(() => dispatch(getUserQuestions()))
    }
    return (
        <div>
            <div onClick={(e) => history.push(`question/${question.id}`)}>Question</div>
            <div>{question.title}</div>
            < EditQuestionFormModal />
            <button onClick={deletebtn}>Delete</button>
            <div>------------------------</div>
        </div>
    )
}

export default OwnerQuestionCard
