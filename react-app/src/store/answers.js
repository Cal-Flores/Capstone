//################### Actions   ###########################
const LOAD_ANSWERS = 'answers/LOAD_ANSWERS'
const CREATE_ANSWER = 'answers/CREATE_ANSWER'
const LOAD_USER_ANSWERS = 'answers/LOAD_USER_ANSWERS'


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
