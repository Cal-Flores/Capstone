//################### Actions   ###########################
const LOAD_ANSWERS = 'answers/LOAD_ANSWERS'
const CREATE_ANSWER = 'answers/CREATE_ANSWER'
const LOAD_USER_ANSWERS = 'answers/LOAD_USER_ANSWERS'
const EDIT_ANSWER = 'answers/EDIT_ANSWER'
const DELETE_ANSWER = 'answers/DELETE_ANSWER'


//################## Action Creators ######################

const loadAll = (answers) => {
    return {
        'type': LOAD_ANSWERS,
        answers
    }
}

const createOne = (newAnswer) => {
    return {
        'type': CREATE_ANSWER,
        newAnswer
    }
}

const userQuestion = (answers) => {
    return {
        'type': LOAD_USER_ANSWERS,
        answers
    }
}

const editAnswer = (newAnswer) => {
    return {
        'type': EDIT_ANSWER,
        newAnswer
    }
}

const deleteAnswer = (answer) => {
    return {
        'type': DELETE_ANSWER,
        answer
    }
}

//######################## Thunks ############################

export const getAllReviews = (id) => async dispatch => {
    const response = await fetch(`/api/questions/${id}/answers`)

    if (response.ok) {
        const answers = await response.json()
        dispatch(loadAll(answers))
        return answers
    }
    return
}

export const createNewAnswer = (id, newAnswer) => async dispatch => {
    const response = await fetch(`/api/questions/${id}/answers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAnswer)
    })
    if (response.ok) {
        const answer = await response.json()
    }
    return
}

export const getUserAnswers = () => async dispatch => {
    const response = await fetch(`/api/answers/user-answers`)

    if (response.ok) {
        const answers = await response.json()
        dispatch(userQuestion(answers))
        return answers
    }
    return
}

export const updateAnswer = (answer, answerId) => async dispatch => {
    const response = await fetch(`/api/answers/${answerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answer)
    })

    if (response.ok) {
        const newAnswer = await response.json()
        dispatch(editAnswer(newAnswer))
        return newAnswer
    }
    return
}

export const deleteAAnswer = (answerId) => async dispatch => {
    const response = await fetch(`/api/answers/${answerId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deleteAnswer(answerId))
    }
}

let initialState = {}
//######################## Reducer ##########################

const answersReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_ANSWERS: {
            const newState = { ...state, ...action.answers }
            return newState
        }
        case LOAD_USER_ANSWERS: {
            newState = { ...action.answers }
            return newState
        }
        default:
            return state
    }
}


export default answersReducer
