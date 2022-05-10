import React from 'react';
import styles from "./my_posts.module.css"
import Post from "./Post/Post";
const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea placeholder={"New post...."}></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default MyPosts;
