import React from 'react';
import styles from "./profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../state/State";
type ProfilePropsType = {
    profilePage: ProfilePageType
}
const Profile = (props:ProfilePropsType) => {
    return (
        <div className={styles.profile}>
         <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}/>
        </div>
    );
};

export default Profile;
