import React from 'react';
import s from "./my_posts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../state/State";

type MyPostsPropsType = {
    posts: PostType[]
    addPost:(text:string)=>void
}
const MyPosts = (props:MyPostsPropsType) => {
    let textForNewPost = React.createRef<HTMLTextAreaElement>()
    const addPost = ()=>{
        props.addPost(textForNewPost.current?.value!)
        console.log(props.posts)
    }
    return (
        <div>
            <div className={s.addPostForm}>
                <textarea placeholder={"New post...."} ref={textForNewPost}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {props.posts.map(p =><Post text={p.text} likes={p.likes}/>)}
        </div>
    );
};

export default MyPosts;
