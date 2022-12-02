//################### Actions   ###########################
const LOAD_POSTS = 'posts/LOAD_POSTS'


//################## Action Creators ######################
const loadAll = (posts) => {
    return {
        'type': LOAD_POSTS,
        posts
    }
}


//######################## Thunks ############################

export const getAllPosts = () => async dispatch => {
    const response = await fetch(`/api/posts/`)

    if (response.ok) {
        const posts = await response.json()
        dispatch(loadAll(posts))
        return posts
    }
    return
}


let initialState = {}
//######################## Reducer ##########################

const postsReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case LOAD_POSTS: {
            newState = { ...action.posts }
            return newState
        }
        default:
            return state
    }

}


export default postsReducer
