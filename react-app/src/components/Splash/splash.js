import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { getAllQuestions } from '../../store/questions'
import CreateQuestionFormModal from '../CreateQuestionForm/CreateQuestionModal'
import CreateSplashQuestionFormModal from '../CreateQuestionForm/CreateSplashQuestionModal'
import QuestionDetail from '../QuestionDetail/questionDetail'
import './splash.css'

function AllQuestions() {
    const dispatch = useDispatch()
    const history = useHistory()
    let questions = useSelector(state => state.questions.Questions)
    const user = useSelector(state => state.session.user)
    const [modal, setModal] = useState(false)


    let loggedin
    let log = false
    if (user) {
        log = true
        loggedin = (<div>Hello {user.username}</div>)
    }



    useEffect(() => {
        dispatch(getAllQuestions())
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
                    ))}
                </div>

            </div>
        </div>
    )

}

export default AllQuestions
