import React, {useState} from "react";

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
    }

    return (
        <form onSubmit={handleSubmit}>
            <form style={{padding: '25px', textAlign: 'center', border: '3px solid red'}}>
                <label>Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <form style={{padding: '3rem'}}>
                <label>What's on your mind</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            </form>
            </form>
            <button type='submit'>Post</button>
        </form>
    )
}

export default CreatePost