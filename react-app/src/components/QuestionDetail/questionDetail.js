import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { Dispatch } from 'react'
import { getAllReviews } from '../../store/answers'
import './questionDetail.css'

function QuestionDetail({ content }) {
    const dispatch = useDispatch()
    //console.log('component content', content)
    //const answers = useSelector(state => state.answers.Answers)
    // console.log('here are some answers', answers)
    const history = useHistory()
    console.log('harley missy', content)

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/users/');
            const responseData = await response.json();
            setUsers(responseData.users);
        }
        fetchData();
    }, []);
    const user = users?.filter(user => user?.id == content?.user_id)[0]

    let contentdiv;
    if (content?.image == null || content?.image == '') {
        contentdiv = (
            <div className='indqcont'>
                <div className='indqwrapper'>
                    <h2>
                        <Link className='splashtitle' id='sptitle' key={content?.id} to={`/question/${content?.id}`}>{content?.title}</Link>
                    </h2>
                    <div>
                        <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
                    </div>
                    <div className='splashname'>{user?.first_name} {user?.last_name}</div>
                    <p className='splashpara'>{content?.body} <Link key={content?.id} to={`/question/${content?.id}`} className='moretag'>(More)</Link></p>
                </div>
                <div className='comfavi' onClick={(e) => history.push(`/question/${content?.id}`)}>
                    <i class="fa-solid fa-comment"></i>
                </div>
            </div>
        )

    } else {
        contentdiv = (
            <div onClick={(e) => history.push(`/post/${content.id}`)}>
                <div>{content?.body}</div>
                <div>
                    <img src={content?.image} style={{ width: '100px', height: '140px' }} />
                </div>
            </div>
        )
    }


    return (
        <div>
            {contentdiv}
        </div>
    )
}


// <div className='indqcont'>
//     <div className='indqwrapper'>
//         <h2>
//             <Link className='splashtitle' id='sptitle' key={content.id} to={`/question/${content.id}`}>{content.title}</Link>
//         </h2>
//         <div>
//             <img src={user?.profile_pic} onError={(e) => { e.target.src = 'https://cdn-icons-png.flaticon.com/128/149/149071.png' }} style={{ width: '40px', height: '40px', borderRadius: '25px' }} />
//         </div>
//         <div className='splashname'>{user?.first_name} {user?.last_name}</div>
//         <p className='splashpara'>{content.body} <Link key={content.id} to={`/question/${content.id}`} className='moretag'>(More)</Link></p>
//     </div>
//     <div className='comfavi' onClick={revealcomms}>
//         <i class="fa-solid fa-comment"></i>
//     </div>
// </div>
export default QuestionDetail
