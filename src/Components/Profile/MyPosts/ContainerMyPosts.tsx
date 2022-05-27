import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changeTextForPostAC} from "../../../state/profileReducer";
import {Context} from "../../../Context";

const ContainerMyPosts = () => {
    return <Context.Consumer>
        {store => {
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
        }}
    </Context.Consumer>
};

export default ContainerMyPosts;
