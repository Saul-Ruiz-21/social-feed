import Buttons from "../Buttons/Buttons/Button"

const DisplayPost=(props) => {
    return props.posts.map((post) => {
        return (
            <div>
                <h5>{post.name}</h5>
                <p>{post.post}</p>
                < Buttons />
            </div>
        )
    })
}

export default DisplayPost