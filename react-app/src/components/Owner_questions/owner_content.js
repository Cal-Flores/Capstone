import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getUserAnswers } from '../../store/answers'
import { getUserQuestions } from '../../store/questions'
import OwnerQuestionCard from '../Your-Questions/your-questions'
import OwnerAnswerCard from '../Owner_answer_card/owner_answer_card'
import './owner_questions.css'
import { getUserPosts } from '../../store/posts'
import OwnerPostCard from '../Owner_Posts/owner_posts'


function OwnerQuestions() {
    const dispatch = useDispatch()
    const questions = useSelector(state => state.questions.Questions)
    const answers = useSelector(state => state.answers.answers)
    const posts = useSelector(state => state.posts.Posts)
    console.log('###############', posts)

    useEffect(() => {
        dispatch(getUserQuestions()).then(() => dispatch(getUserAnswers())).then(() => dispatch(getUserPosts()))
    }, [dispatch])
    return (
        <div>
            <div>
                <div className='yccontainer'>
                    <h1 className='ycheader'>Your Content</h1>
                </div>
                <div>
                    {posts?.map(post => (
                        <div>
                            <OwnerPostCard post={post} />
                        </div>
                    ))}
                </div>
                {questions?.map(question => (
                    <div>
                        <OwnerQuestionCard question={question} />
                    </div>
                )).reverse()}
            </div>
            {answers?.map(answer => (
                <div>
                    <OwnerAnswerCard answer={answer} />
                </div>
            )).reverse()}
        </div>

    )
}


export default OwnerQuestions
