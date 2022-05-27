import React from 'react';
import styles from "./profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ContainerMyPosts from './MyPosts/ContainerMyPosts';

const Profile = () => {
    return (
        <div className={styles.profile}>
         <ProfileInfo/>
            <ContainerMyPosts
            />
        </div>
    );
};

export default Profile;
