import React from 'react';
import styles from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, ProfilePageType} from "../../state/State";
type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch:(action:ActionTypes)=>void
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={styles.profile}>
         <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}
                     textForPost = {props.profilePage.textForPost}
                     dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
