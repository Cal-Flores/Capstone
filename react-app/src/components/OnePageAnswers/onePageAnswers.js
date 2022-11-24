import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'

function OnePageAnswers({ answer }) {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);

    const user = users?.filter(user => user?.id == answer.user_id)[0]
    return (
        <div>
            <div>
                {<img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />}
            </div>
            <div>{user?.first_name} {user?.last_name}</div>
            <div>{answer.body}</div>
            <div>--------------------</div>
        </div>
    )
}

export default OnePageAnswers
