import React from 'react';
import s from './profile_info.module.css'

import {contactsUserInfoType, photosUserInfoType} from "../../../state/State";
import EditableStatus from "./EditableStatus/EditableStatus";

type ProfileInfoPropsType = {
    updateStatus: (status: string) => void
    aboutMe: string | null
    contacts: contactsUserInfoType
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: photosUserInfoType
    status: string
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                {props.photos.large ?
                    <img src={props.photos.large} alt="ava"/>
                    : <img
                        src="https://media.istockphoto.com/photos/young-man-embracing-rainforest-standing-in-sunbeams-illuminating-the-picture-id1191199951?b=1&k=20&m=1191199951&s=170667a&w=0&h=20dqbPbr2o2vYm4pq37CTFMmC9xWxtsUp0Q47xlP5Tg="
                        alt="Ava"/>}
            </div>
            <div>
                <h1>{props.fullName}</h1>
                <EditableStatus status={props.status} updateStatus={props.updateStatus}/>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li>
                </ul>
            </div>
        </div>
    );
};


