import React from 'react';
import styles from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../state/State";
type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost:(text:string)=>void
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={styles.profile}>
         <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;
