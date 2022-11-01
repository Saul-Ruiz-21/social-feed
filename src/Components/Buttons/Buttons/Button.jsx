import React, { useState } from 'react'
import './Button.css'

const Buttons = (props) => {
    const [LikeButton, setLikeButton] = useState('inactive');
    const [DislikeButton, setDislikeButton] = useState('inactive');

    function handleClick() {
        if (LikeButton === 'inactive') {
            setLikeButton('active');
            setDislikeButton('inactive')
        }
        else{
            setDislikeButton('active')
            setLikeButton('inactive')
        }
        
    }

    return (
        <div>
            <button className={LikeButton} onClick={handleClick}>
                Like
            </button>

            <button className={DislikeButton} onClick={handleClick}>
                Dislike
            </button>
        </div>
    )
}

export default Buttons