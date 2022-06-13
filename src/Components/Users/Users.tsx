import React, {ChangeEvent} from 'react';
import {UserType} from "../../state/usersReducer";
import s from "./users.module.css"
import Preloader from "../CommonComponents/Preloader";

type UsersPropsType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    totalUsersCount:number
    count:number
    currentPage:number
    setCurrentPageHandler:(e: ChangeEvent<HTMLInputElement>)=>void
    isFetching:boolean
}

export const Users = (props: UsersPropsType) => {
    let allPages = Math.ceil(props.totalUsersCount / props.count)
    let pages = []
    for (let i = 1; i < allPages; i++) {
        pages.push(i)
    }
    return <div>
        <Preloader isActive={props.isFetching}/>
        <input type="range" value={props.currentPage} onChange={props.setCurrentPageHandler}
               max={pages[pages.length-1]} /> {props.currentPage}
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
    </div>;
}





