//################### Actions   ###########################
const LOAD_POSTS = 'posts/LOAD_POSTS'
const LOAD_ONE = 'posts/LOAD_ONE'
const LOAD_USER_POSTS = 'posts/LOAD_USER_POSTS'
const CREATE_POST = 'posts/CREATE_POST'
const EDIT_POST = 'posts/EDIT_POST'
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

const createPost = (post) => {
    return {
        'type': CREATE_POST,
        post
    }
}

const deletePost = (post) => {
    return {
        'type': DELETE_POST,
        post
    }
}

const editPost = (newPost) => {
    return {
        'type': EDIT_POST,
        newPost
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

export const createNewPost = (newPost) => async dispatch => {
    const response = await fetch(`/api/posts/create-post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
    })

    if (response.ok) {
        const post = await response.json()
        dispatch(createPost(post))
        return post
    }
    return
}

export const updatePost = (post, postId) => async dispatch => {
    const response = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })

    if (response.ok) {
        const newPost = await response.json()
        dispatch(editPost(newPost))
        return newPost
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
        case LOAD_ONE: {
            newState = { ...action.post.Post }
            return newState
        }
        case LOAD_USER_POSTS: {
            newState = { ...action.posts }
            return newState
        }
        case CREATE_POST: {
            newState = { ...action.post }
            return newState
        }
        default:
            return state
    }

}


export default postsReducer
