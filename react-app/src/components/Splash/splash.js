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
    console.log('this is all my data right here', data)




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
                    {questions?.map(question => (
                        <QuestionDetail key={question?.id} question={question} />
                    )).reverse()}
                </div>

            </div>
        </div>
    )

}

export default AllQuestions
