import React from 'react';
import s from './profile_info.module.css'

const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img
                    src="https://media.istockphoto.com/photos/young-man-embracing-rainforest-standing-in-sunbeams-illuminating-the-picture-id1191199951?b=1&k=20&m=1191199951&s=170667a&w=0&h=20dqbPbr2o2vYm4pq37CTFMmC9xWxtsUp0Q47xlP5Tg="
                    alt="Ava"/>

            </div>
            <div>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                    <li>Lorem ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur.</li></ul>
            </div>

        </div>
    );
};

export default ProfileInfo;
