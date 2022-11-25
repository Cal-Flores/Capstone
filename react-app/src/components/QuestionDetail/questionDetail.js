import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Dispatch } from 'react'
import { getAllReviews } from '../../store/answers'

function QuestionDetail({ question }) {
    const dispatch = useDispatch()
    const answers = useSelector(state => state.answers.Answers)
    const history = useHistory()

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

    const revealcomms = (e) => {
        e.preventDefault()
        history.push(`/question/${question.id}`)
    }

    return (
        <div>
            <h2>
                <Link key={question.id} to={`/question/${question.id}`}>{question.title}</Link>
            </h2>
            <div>
                <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
            </div>
            <div>{user?.first_name} {user?.last_name}</div>
            <div>{question.body}</div>
            <div onClick={revealcomms}>
                <i class="fa-solid fa-comment"></i>
            </div>
        </div>
    )
}


export default QuestionDetail
