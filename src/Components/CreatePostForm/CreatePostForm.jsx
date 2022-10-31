import React, {useState} from "react";
import './PostForm.css'

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let newForm = {
            name: name,
            post: post
        };
        console.log(newForm);
        props.addNewPostProperty(newForm)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="surroundingbox">
                <div className="borderbox">
                    <label>Name</label>
                    <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
                </div>

                <div className="BorderBox">
                    <label>What's on your mind</label>
                    <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
                    <button type='submit'>Post</button>
                </div>
            </div>
        </form>
    )
}

export default CreatePost