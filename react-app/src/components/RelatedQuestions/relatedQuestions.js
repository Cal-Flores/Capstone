import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { getRelatedQuestions } from '../../store/related'


function RelatedQuestions() {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.related.Related)
    console.log('related questions', questions)

    useEffect(() => {
        dispatch(getRelatedQuestions())
    }, [dispatch])
    return (
        <div>
            <div>Related Questions</div>
            {questions?.map(quest => (
                <div>{quest.title}</div>
            ))}
        </div>
    )
}

export default RelatedQuestions
