import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory, useParams } from 'react-router-dom'
import '../Owner_answer_card/owner_answer.css'
import { deleteAPost, getUserPosts } from '../../store/posts'
import EditPostModal from '../EditPost/editPostModal'

function OwnerPostCard({ post }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const redirectme = (e) => {
        e.preventDefault()
        history.push(`post/${post.id}`)
    }
    const deletebtn = async (e) => {
        e.preventDefault()
        dispatch(deleteAPost(post.id)).then(() => dispatch(getUserPosts()))
    }


    return (
        <div className='ancontainer'>
            <div className='anwrapper'>
                <div className='ancol'>
                    <div className='ananswer' onClick={redirectme}>Post</div>
                    <div className='anbody'>{post.body}</div>
                    <div className='edabtn'>
                        <EditPostModal post={post} />
                        <button className='yabtn' onClick={deletebtn}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OwnerPostCard
