import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Props are coming from router props
const Post = (props) => {
    const[post, setPost] = useState(null);
    useEffect(() => {
        // Right below will return what id the post item had connected to it
        console.log(props);
        let id = props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                setPost(res.data);
            })
    }, []);
    const postToDisplay = post ? (
        <div className="post">
            <h4 className="center">{post.title}</h4>
            <p>{post.body}</p>
        </div>
    ) : (
        <div className="center">Loading post...</div>
    )
    return (
        <div className="container">
            <h4>{postToDisplay}</h4>
        </div>
    )
}

export default Post;