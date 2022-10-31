const DisplayPost=(props) => {
    return props.posts.map((post) => {
        return (
            <div>
                <h5>{post.name}</h5>
                <p>{post.post}</p>
            </div>
        )
    })
}

export default DisplayPost