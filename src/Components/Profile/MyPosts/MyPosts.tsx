import React from 'react';

import Post from "./Post/Post";
import {PostType} from "../../../state/State";
import AddPostForm, {PostFormData} from "./Post/AddPostForm/AddPostForm";


type MyPostsPropsType = {
    posts: PostType[]
    addPost: (textForPost: string) => void
    changeTextForPost: (text: string) => void
}
const MyPosts = (props: MyPostsPropsType) => {

    const addPost = (formData: PostFormData) => {
        props.addPost(formData.textForPost)
    }

    return (
        <div>
            <AddPostForm onSubmit={addPost}/>
            {props.posts.map((p, index) => <Post key={index} text={p.text} likes={p.likes}/>)}
        </div>
    );
};

export default MyPosts;
