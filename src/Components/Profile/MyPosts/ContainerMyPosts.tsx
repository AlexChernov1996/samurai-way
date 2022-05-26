import React from 'react';
import MyPosts from "./MyPosts";
import {store} from "../../../state/store";
import {addPostAC, changeTextForPostAC} from "../../../state/profileReducer";

const ContainerMyPosts = () => {
    const addPost = () => {
        store.dispatch(addPostAC())
    }
    const changeTextForPost = (text: string) => {
        store.dispatch(changeTextForPostAC(text))
    }
    return <MyPosts
        posts={store.getState().profilePage.posts}
        addPost={addPost}
        changeTextForPost={changeTextForPost}
        textForPost={store.getState().profilePage.textForPost}/>
};

export default ContainerMyPosts;
