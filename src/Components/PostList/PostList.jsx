import React, {useState} from "react";
import DisplayPost from "../DisplayPost/DisplayPost";
import './PostList.css'

const PostList = (props) => {
    return (
        <section className="addPost">
            <div className="text">
                <DisplayPost posts={props.parentEntries} />
            </div>
        </section>
        
    )
}

export default PostList