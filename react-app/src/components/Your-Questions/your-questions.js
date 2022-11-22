import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'

function OwnerQuestionCard({ question }) {
    return (
        <div>
            <div>Question</div>
            <div>{question.title}</div>
            <button>Edit</button>
            <button>Delete</button>
            <div>------------------------</div>
        </div>
    )
}

export default OwnerQuestionCard
