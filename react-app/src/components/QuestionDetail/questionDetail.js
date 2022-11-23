import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Dispatch } from 'react'
import { getAllReviews } from '../../store/answers'

function QuestionDetail({ question }) {
    const dispatch = useDispatch()
    const answers = useSelector(state => state.answers.Answers)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const user = users?.filter(user => user?.id == question.user_id)[0]
    console.log('this is my ultimate user dude', user)

    const [com, setCom] = useState(false)
    const revealcomms = (e) => {
        e.preventDefault()
        setCom(true)
        dispatch(getAllReviews(question.id))
    }

    return (
        <div>
            <h2>
                <Link key={question.id} to={`/question/${question.id}`}>{question.title}</Link>
            </h2>
            <div>{user?.username}</div>
            <div>{question.body}</div>
            <button onClick={revealcomms}>comments</button>
            {com && (
                <div className='answerwrapper'>{answers?.map(answer => {
                    <div key={answer.id}>{answer?.body}</div>
                })}</div>
            )}
        </div>
    )
}


export default QuestionDetail
