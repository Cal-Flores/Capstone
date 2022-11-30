// CRUD
const SEARCH_POST_QUESTIONS = 'search/SEARCH_QUESTIONS'


const postSearch = (searchResults) => {
    console.log('ac is hit')
    return {
        'type': SEARCH_POST_QUESTIONS,
        searchResults
    }
}


export const createSearch = (obj) => async dispatch => {
    console.log('thunk is hit')
    const response = await fetch(`/api/search`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    })
    if (response.ok) {
        const searchResults = await response.json()
        dispatch(postSearch(searchResults))
        return searchResults
    }
}

let initialState = {}

const searchReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case SEARCH_POST_QUESTIONS: {
            console.log('reducer hit')
            newState = { ...action.searchResults }
            console.log('here is my new state bucko', newState)
            return newState
        }
        default:
            return state
    }
}

export default searchReducer
