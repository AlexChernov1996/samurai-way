import React from 'react';
import {UserType} from "../../state/usersReducer";
import s from "./users.module.css"
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    getUsers: (users: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => {
            props.getUsers(res.data.items)
        })
    }
    return <div>
        {props.users.map((u) => {
            return (<div className={s.wrapper} key={u.id}>
                <div className={s.ava_follow}>
                    <img
                        src={u.photos.small || 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}
                        alt="avatar"/>
                    {u.followed
                        ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                </div>
                <div className={s.name_status}>
                    <h3>{u.name}</h3>
                    <p>{u.status}</p>
                </div>
                <div className={s.address}>adress</div>
            </div>)
        })
        }

    </div>
}





