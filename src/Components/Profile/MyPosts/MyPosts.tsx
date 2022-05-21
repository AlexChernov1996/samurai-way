import React from 'react';
import s from "./my_posts.module.css"
import Post from "./Post/Post";
import {ActionType, PostType} from "../../../state/State";

type MyPostsPropsType = {
    posts: PostType[]
    textForPost: string
    dispatch: (action: ActionType) => void
}
const MyPosts = (props: MyPostsPropsType) => {
    let textForNewPost = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        props.dispatch({type: 'ADD-POST'})
    }
    const updateTextForPost = () => {
        props.dispatch({type: 'CHANGE-TEXT-FOR-POST', text: textForNewPost.current?.value!})
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
