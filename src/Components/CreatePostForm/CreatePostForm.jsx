import React, {useState} from "react";

const CreatePost = (props) => {
    const [name, setName] = useState('')
    const {post, setPost} = useState('')

    const handlePost = e => setName(e.target.value)

return (
    <form style={{padding: '25px', textAlign: 'center', border: '3px solid red'}}>
        <div>
            <label>Name</label>
            <input type='text' value={name} onChange={handlePost} />
        </div>
        <form style={{padding: '3rem'}}>
            <div>
                <label>What's on your mind</label>
                <input type='text' value={post} />
            </div>
        </form>
    </form>
)
}

export default CreatePost