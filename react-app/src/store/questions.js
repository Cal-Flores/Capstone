//################### Actions   ###########################
const LOAD_QUESTIONS = 'questions/LOAD_QUESTIONS'
const LOAD_ONE_QUESTION = 'questions/LOAD_ONE_QUESTION'
const LOAD_USER_QUESTIONS = 'questions/LOAD_USER_QUESTIONS'
const CREATE_QUESTION = 'questions/CREATE_QUESTIONS'
const EDIT_QUESTION = 'question/EDIT_QUESTION'
const DELETE_QUESTION = 'question/DELETE_QUESTION'


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

const userQuestions = (questions) => {
    return {
        'type': LOAD_USER_QUESTIONS,
        questions
    }
}

const createQuestion = (question) => {
    return {
        'type': CREATE_QUESTION,
        question
    }
}

const editQuestion = (newQuestion) => {
    return {
        'type': EDIT_QUESTION,
        newQuestion
    }
}

const deleteQuestion = (question) => {
    return {
        'type': DELETE_QUESTION,
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

export const getUserQuestions = () => async dispatch => {
    const response = await fetch(`/api/questions/your-content`)

    if (response.ok) {
        const questions = await response.json()
        dispatch(userQuestions(questions))
        return questions
    }
    return
}

export const createNewQuestion = (newQuestion) => async dispatch => {
    const response = await fetch(`/api/questions/ask-question`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newQuestion)
    })

    if (response.ok) {
        const question = await response.json()
        dispatch(createQuestion(question))
        return question
    }
    return
}

export const updateQuestion = (question, questionId) => async dispatch => {
    const response = await fetch(`/api/questions/${questionId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(question)
    })

    if (response.ok) {
        const newQuestion = await response.json()
        dispatch(editQuestion(newQuestion))
        return newQuestion
    }
    return
}

export const deleteAQuestion = (questionId) => async dispatch => {
    const response = await fetch(`/api/questions/${questionId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deleteQuestion(questionId))
    }
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
        case LOAD_USER_QUESTIONS: {
            newState = { ...action.questions }
            return newState
        }
        case CREATE_QUESTION: {
            newState = { ...action.question }
            return newState
        }
        // case EDIT_QUESTION: {
        //     newState = { ...state }
        //     newState = { ...action.questions }

        // }
        // case DELETE_QUESTION: {
        //     delete newState[action.deleted]
        //     newState = { ...newState }
        //     return newState
        // }
        default:
            return state
    }
}


export default questionsReducer
