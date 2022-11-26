import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteAQuestion, getUserQuestions } from '../../store/questions'
import EditQuestionFormModal from '../EditQuestionForm/editQuestionModal'
import './your-questions.css'

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
        <div className='qucontainer'>
            <div className='quwrapper'>
                <div className='qutitle'>
                    <div className='qutitletxt' onClick={(e) => history.push(`question/${question.id}`)}>Question</div>
                    <div className='qutittxt'>{question.title}</div>
                    <div className='edqbtn'>
                        < EditQuestionFormModal q={question} />
                        <button className='yqubtn' onClick={deletebtn}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerQuestionCard
