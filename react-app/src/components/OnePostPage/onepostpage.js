import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getOnePost } from '../../store/posts'


function PostPage() {
    const dispatch = useDispatch()
    const post = useSelector(state => state.posts)
    console.log('this is my singular post', post)
    const user = useSelector(state => state.session.user)
    const { postId } = useParams()

    useEffect(() => {
        dispatch(getOnePost(postId))
    }, [dispatch])
    return (
        <div>
            <div>{post?.body}</div>
            <img src={post?.image} style={{ width: '500px', height: '540px' }} />
        </div>
    )
}

export default PostPage
