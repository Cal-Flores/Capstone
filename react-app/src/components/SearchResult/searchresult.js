import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'
import QuestionDetail from '../QuestionDetail/questionDetail'
//import SearchPage from '../SearchPage/searchpage'
import '../QuestionDetail/questionDetail.css'
import CreateQuestionFormModal from '../CreateQuestionForm/CreateQuestionModal'

function SearchResult() {
    const searcheditems = useSelector(state => state.search.questions)
    const user = useSelector(state => state.session.user)
    console.log('me user', user)
    console.log('search results lie here', searcheditems)
    let results;
    if (searcheditems?.length > 0) {
        results = true
    } else {
        results = false
    }
    let curruser
    if (user == null) {
        curruser = false
    } else {
        curruser = true
    }
    return (
        <div>
            {!results &&
                <div className='norescont'>
                    <div className='faileds'>
                        <div className='norestxt'>We couldn't find any results</div>
                        {curruser &&
                            <div>
                                <CreateQuestionFormModal />
                            </div>
                        }
                    </div>
                </div>
            }
            {results && searcheditems?.map(item => (
                <QuestionDetail question={item} />
            ))}
        </div>
    )
}


export default SearchResult;
