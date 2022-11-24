import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import { getAllQuestions } from '../../store/questions'
import CreateQuestionFormModal from '../CreateQuestionForm/CreateQuestionModal'
import CreateSplashQuestionFormModal from '../CreateQuestionForm/CreateSplashQuestionModal'
import QuestionDetail from '../QuestionDetail/questionDetail'

function AllQuestions() {
    const dispatch = useDispatch()
    const history = useHistory()
    const questions = useSelector(state => state.questions.Questions)
    const user = useSelector(state => state.session.user)
    console.log('blanket', user)
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
            <div>
                {log && loggedin}
            </div>
            <div>
                <CreateSplashQuestionFormModal />
            </div>
            <div>
                {questions?.map(question => (
                    <QuestionDetail key={question?.id} question={question} />
                ))}

            </div>
        </div>
    )

}

export default AllQuestions
