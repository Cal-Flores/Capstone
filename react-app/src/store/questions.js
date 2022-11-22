//################### Actions   ###########################
const LOAD_QUESTIONS = 'questions/LOAD_QUESTIONS'
const LOAD_ONE_QUESTION = 'questions/LOAD_ONE_QUESTION'


//################## Action Creators ######################

// loads all questions for splash page
const loadAll = (questions) => {
    return {
        'type': LOAD_QUESTIONS,
        questions
    }
}

const loadOne = (question) => {
    return {
        'type': LOAD_ONE_QUESTION,
        question
    }
}



//######################## Thunks ############################

export const getAllQuestions = () => async dispatch => {
    const response = await fetch(`/api/questions/`)

    if (response.ok) {
        const questions = await response.json()
        dispatch(loadAll(questions))
        return questions
    }
    return
}


export const getOneProduct = (id) => async dispatch => {
    const response = await fetch(`/api/questions/${id}`)

    if (response.ok) {
        const question = await response.json()
        dispatch(loadOne(question))
        return question
    }
    return
}

let initialState = {}
//######################## Reducer ##########################

const questionsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_QUESTIONS: {
            newState = { ...action.questions }
            return newState
        }
        case LOAD_ONE_QUESTION: {
            newState = { ...action.question.Question }
            return newState
        }
        default:
            return state
    }
}


export default questionsReducer
