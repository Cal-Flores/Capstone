import { Redirect, useHistory } from 'react-router-dom'
import React from 'react';
import './NavBar.css'

function Aboutme() {
    return (
        <div className='describecontainer'>
            <div className='describewrapper'>
                <h1>About Fourth Quorra!</h1>
                <p className='pdesc'>Fourth Quorra is a platform to ask questions about the game of Football! All users can answer your questions ranging from expert level questions to begginer questions. Also we encourage you to share thoughts about Football with a post to be added to the feed. please enjoy!</p>
            </div>
        </div>
    )
}


export default Aboutme;
