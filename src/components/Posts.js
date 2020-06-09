import React from 'react'

const Posts = (props) => {

    if(props.loading) {
        return <h2>Loading ...</h2>
    }

    return (
        <div>
            {props.posts.map(post => (
                <div key={post.id}>
                    {post.title}
                </div>
            ))}
        </div>
    )
}

export default Posts
