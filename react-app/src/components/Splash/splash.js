import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

function AllQuestions() {
    const dispatch = useDispatch()


    return (
        <h1>Hello Quorra</h1>
    )

}

export default AllQuestions
