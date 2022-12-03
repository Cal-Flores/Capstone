//################### Actions   ###########################
const LOAD_POSTS = 'posts/LOAD_POSTS'
const LOAD_ONE = 'posts/LOAD_ONE'
const LOAD_USER_POSTS = 'posts/LOAD_USER_POSTS'
const DELETE_POST = 'posts/DELETE_POST'


//################## Action Creators ######################
const loadAll = (posts) => {
    return {
        'type': LOAD_POSTS,
        posts
    }
}

const loadOne = (post) => {
    return {
        'type': LOAD_ONE,
        post
    }
}

const userPosts = (posts) => {
    return {
        'type': LOAD_USER_POSTS,
        posts
    }
}

const deletePost = (post) => {
    return {
        'type': DELETE_POST,
        post
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

export const getOnePost = (id) => async dispatch => {
    const response = await fetch(`/api/posts/${id}`)

    if (response.ok) {
        const post = await response.json()
        dispatch(loadOne(post))
        return post
    }
    return
}

export const getUserPosts = () => async dispatch => {
    const response = await fetch(`/api/posts/your-posts`)

    if (response.ok) {
        const posts = await response.json()
        dispatch(userPosts(posts))
        return posts
    }
    return
}

export const deleteAPost = (postId) => async dispatch => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(deletePost(postId))
    }
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
        case LOAD_ONE: {
            newState = { ...action.post.Post }
            return newState
        }
        case LOAD_USER_POSTS: {
            newState = { ...action.posts }
            return newState
        }
        default:
            return state
    }

}


export default postsReducer
