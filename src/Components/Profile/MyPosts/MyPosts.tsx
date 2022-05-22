import React from 'react';
import s from "./my_posts.module.css"
import Post from "./Post/Post";
import {ActionTypes, PostType} from "../../../state/State";
import {addPostAC, changeTextForPostAC} from "../../../state/profileReducer";

type MyPostsPropsType = {
    posts: PostType[]
    textForPost: string
    dispatch: (action: ActionTypes) => void
}
const MyPosts = (props: MyPostsPropsType) => {
    let textForNewPost = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch(addPostAC())
    }
    const updateTextForPost = () => {
        props.dispatch(changeTextForPostAC(textForNewPost.current?.value!))
    }
    return (
        <div>
            <div className={s.addPostForm}>
                <textarea placeholder={"New post...."}
                          ref={textForNewPost}
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
