//################### Actions   ###########################
const LOAD_ANSWERS = 'answers/LOAD_ANSWERS'


//################## Action Creators ######################

const loadAll = (answers) => {
    return {
        'type': LOAD_ANSWERS,
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


let initialState = {}
//######################## Reducer ##########################

const answersReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_ANSWERS: {
            const newState = { ...state, ...action.answers }
            return newState
        }
        default:
            return state
    }
}


export default answersReducer
