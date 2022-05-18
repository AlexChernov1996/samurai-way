import React from 'react';
import styles from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeTextForPost, ProfilePageType} from "../../state/State";
type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:(text:string)=>void
    changeTextForPost:(text:string)=>void
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={styles.profile}>
         <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}
                     addPost={props.addPost}
                     textForPost = {props.profilePage.textForPost}
                     changeTextForPost={props.changeTextForPost}
            />
        </div>
    );
};

export default Profile;
