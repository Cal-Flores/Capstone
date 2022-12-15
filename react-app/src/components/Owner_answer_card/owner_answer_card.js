import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { deleteAAnswer, getUserAnswers } from '../../store/answers'
import EditAnswerFormModal from '../EditAnswerForm/EditAnswerModal'
import EditQuestionFormModal from '../EditQuestionForm/editQuestionModal'
import './owner_answer.css'

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
        <div className='ancontainer'>
            <div className='anwrapper'>
                <div className='ancol'>
                    <div className='ananswer' onClick={redirectme}>Comment</div>
                    <div className='anbody'>{answer.body}</div>
                    <div className='edabtn'>
                        <EditAnswerFormModal a={answer} />
                        <button className='yabtn' onClick={deletebtn}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerAnswerCard
