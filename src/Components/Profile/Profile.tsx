import React from 'react';
import styles from "./profile.module.css"
import ContainerMyPosts from './MyPosts/ContainerMyPosts';
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoClassContainer";


const Profile = () => {

    return (
        <div className={styles.profile}>
         <ProfileInfoContainer  />
            <ContainerMyPosts/>
        </div>
    );
};

export default Profile;
