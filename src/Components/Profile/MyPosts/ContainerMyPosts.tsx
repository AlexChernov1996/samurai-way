import React from 'react';
import MyPosts from "./MyPosts";
import {addPost, changeTextForPost} from "../../../state/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../state/store";
import {PostType} from "../../../state/State";

// const ContainerMyPosts = () => {
//     return <Context.Consumer>
//         {store => {
//             const addPost = () => {
//                 store.dispatch(addPostAC())
//             }
//             const changeTextForPost = (text: string) => {
//                 store.dispatch(changeTextForPostAC(text))
//             }
//             return <MyPosts
//                 posts={store.getState().profilePage.posts}
//                 addPost={addPost}
//                 changeTextForPost={changeTextForPost}
//                 textForPost={store.getState().profilePage.textForPost}/>
//         }}
//     </Context.Consumer>
// };
type MapStateToPropsType = {
    posts: PostType[]
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

const ContainerMyPosts = connect(mapStateToProps, {
    addPost,
    changeTextForPost
})(MyPosts)
export default ContainerMyPosts;
