import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'

function QuestionDetail({ question }) {
    return (
        <div>
            <h2>
                <Link key={question.id} to={`/question/${question.id}`}>{question.title}</Link>
            </h2>
            <div>{question.body}</div>
        </div>
    )
}


export default QuestionDetail
