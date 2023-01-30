import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { getAllPosts } from '../../store/posts'
import { getAllQuestions } from '../../store/questions'
import CreateSplashQuestionFormModal from '../CreateQuestionForm/CreateSplashQuestionModal'
import QuestionDetail from '../QuestionDetail/questionDetail'
import './splash.css'

function AllQuestions() {
    const dispatch = useDispatch()
    let questions = useSelector(state => state.questions.Questions)
    const user = useSelector(state => state.session.user)
    const posts = useSelector(state => state.posts.Posts)

    const data = questions?.concat(posts)
    const shuffledData = data?.sort((a, b) => 0.5 - Math.random());

    console.log('this is all my data right here', shuffledData)




    useEffect(() => {
        dispatch(getAllQuestions())
        dispatch(getAllPosts())
    }, [dispatch])

    return (
        <div>
            {user &&
                <div>
                    <CreateSplashQuestionFormModal />
                </div>
            }
            {!user &&
                <div className='suggest'></div>
            }
            <div className='indvcontainer'>
                <div className='indvwrap'>
                    {shuffledData?.map(content => (
                        <QuestionDetail key={content?.id} content={content} />
                    )).reverse()}
                </div>

            </div>
        </div>
    )

}

export default AllQuestions
