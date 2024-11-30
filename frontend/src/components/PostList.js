import React, { useEffect, useState } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <ul>
            {posts.map(post => (
                <li key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </li>
            ))}
        </ul>
    );
}

export default PostList;

