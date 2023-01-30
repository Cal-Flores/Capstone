import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import { getOnePost } from '../../store/posts'
import './onepostpage.css'


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
        <div className='onedetcont'>
            <div className='onedetwrapper'>
                <img className='onepostpic' src={post?.image} onError={(e) => { e.target.src = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg' }} style={{}} />
                <div className='onepostpara'>{post?.body}</div>
            </div>
        </div>
    )
}

export default PostPage
