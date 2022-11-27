import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getAllQuestions, getOneProduct } from '../../store/questions'
import './onePageAnswers.css'


function OnePageAnswers({ answer }) {
    const dispatch = useDispatch()

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
        <div className='comcontainer'>
            <div className='comwrapper'>
                <div className='coms'>
                    <div>
                        {<img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />}
                    </div>
                    <div className='comname'>{user?.first_name} {user?.last_name}</div>
                    <div className='comtxt'>{answer.body}</div>
                </div>
            </div>
        </div>
    )
}

export default OnePageAnswers
