//################### Actions   ###########################
const LOAD_RELATED = 'question/LOAD_RELATED'


//################## Action Creators ######################
const loadRelated = (rQuestions) => {
    console.log('load action c')
    return {
        'type': LOAD_RELATED,
        rQuestions
    }
}

//######################## Thunks ############################


export const getRelatedQuestions = () => async dispatch => {
    console.log('i am hit')
    const response = await fetch(`/api/related/relatedQ`)

    if (response.ok) {
        console.log('i am .ok')
        const rQuestions = await response.json()
        dispatch(loadRelated(rQuestions))
        return rQuestions
    }
}

let initialState = {}
//######################## Reducer ##########################

const relatedReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_RELATED: {
            console.log('im a reducer')
            newState = { ...action.rQuestions }
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


export default relatedReducer
