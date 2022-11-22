//################### Actions   ###########################
const LOAD_QUESTIONS = 'questions/LOAD_QUESTIONS'


//################## Action Creators ######################

// loads all questions for splash page
const loadAll = (questions) => {
    return {
        'type': LOAD_QUESTIONS,
        questions
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



let initialState = {}
//######################## Reducer ##########################

const questionsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_QUESTIONS: {
            newState = { ...action.questions }
            return newState
        }
        default:
            return state
    }
}


export default questionsReducer
