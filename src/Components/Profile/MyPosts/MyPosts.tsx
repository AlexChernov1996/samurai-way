import React from 'react';
import s from "./my_posts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../state/State";

type MyPostsPropsType = {
    posts: PostType[]
}
const MyPosts = (props:MyPostsPropsType) => {
    return (
        <div>
            <div className={s.addPostForm}>
                <input placeholder={"New post...."}></input>
                <button>Add post</button>
            </div>
            {props.posts.map(p =><Post text={p.text} likes={p.likes}/>)}
        </div>
    );
};

export default MyPosts;
