import React from 'react';
import MyPosts from "./MyPosts";
import {addPostAC, changeTextForPostAC} from "../../../state/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../state/store";
import {Dispatch} from "redux";
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
    textForPost: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    changeTextForPost: (text: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        textForPost: state.profilePage.textForPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        changeTextForPost: (text: string) => {
            dispatch(changeTextForPostAC(text))
        }

    }
}
const ContainerMyPosts = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default ContainerMyPosts;
