import React, {ChangeEvent} from 'react';
import s from "./my_posts.module.css"
import Post from "./Post/Post";
import {ActionTypes, PostType} from "../../../state/State";


type MyPostsPropsType = {
    posts: PostType[]
    textForPost: string
    addPost:()=> void
    changeTextForPost:(text:string)=>void
}
const MyPosts = (props: MyPostsPropsType) => {

    const addPost = () => {
       props.addPost()
    }
    const updateTextForPost = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextForPost(e.currentTarget.value)
    }
    return (
        <div>
            <div className={s.addPostForm}>
                <textarea placeholder={"New post...."}
                          value={props.textForPost}
                          onChange={updateTextForPost}
                >
                </textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            {props.posts.map(p => <Post text={p.text} likes={p.likes}/>)}
        </div>
    );
};

export default MyPosts;
