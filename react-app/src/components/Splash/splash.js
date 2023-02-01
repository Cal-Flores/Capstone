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

    // const data = posts
    //console.log('this is data', data)
    const shuffledData = questions?.concat(posts)
    // const shuffledData = data?.sort((a, b) => 0.5 - Math.random());
    function DateComparator(dateAPair, dateBPair) {

        var DateA = new Date(dateAPair.created);
        var DateB = new Date(dateBPair.created);
        if (DateA < DateB) {
            return -1;
        } else if (DateA > DateB) {
            return 1;
        } else {
            return 0;
        }
    }

    shuffledData?.sort(DateComparator);
    console.log('gnt', shuffledData);


    // console.log('this is all my shuffleddata right here', shuffledData)




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
