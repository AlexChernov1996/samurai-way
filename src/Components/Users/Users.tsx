import React, {ChangeEvent} from 'react';
import {UserType} from "../../state/usersReducer";
import s from "./users.module.css"
import Preloader from "../CommonComponents/Preloader";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersApi} from "../../api/users-api";

type UsersPropsType = {
    users: UserType[]
    follow: (id: number) => void
    unFollow: (id: number) => void
    totalUsersCount: number
    count: number
    currentPage: number
    setCurrentPageHandler: (e: ChangeEvent<HTMLInputElement>) => void
    isFetching: boolean
    isFollowing: number[]
    setIsFollowing: (value: boolean, id: number) => void
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
               max={pages[pages.length - 1]} min={1}/> {props.currentPage}
        {props.users.map((u) => {
            return (<div className={s.wrapper} key={u.id}>
                <div className={s.ava_follow}>
                    <NavLink to={`Profile/${u.id}`}><img
                        src={u.photos.small || 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}
                        alt="avatar"/></NavLink>
                    {u.followed
                        ? <button disabled={props.isFollowing.some((id) => id === u.id)}
                                  onClick={() => {
                                      props.setIsFollowing(true, u.id)
                                      usersApi.unFollow(u.id)
                                          .then((res) => {
                                              if (res.data.resultCode === 0) {
                                                  props.unFollow(u.id)
                                                  props.setIsFollowing(false, u.id)
                                              }
                                          })
                                  }
                                  }>unFollow</button>
                        : <button disabled={props.isFollowing.some((id) => id === u.id)}
                                  onClick={() => {
                                      props.setIsFollowing(true, u.id)
                                      usersApi.follow(u.id).then((res) => {
                                          if (res.data.resultCode === 0) {
                                              props.follow(u.id)
                                              props.setIsFollowing(false, u.id)
                                          }
                                      })
                                  }
                                  }>Follow</button>
                    }
                </div>
                <div className={s.name_status}>
                    <h3>{u.name}</h3>
                    <p>{u.status}</p>
                </div>
                <div className={s.address}>address</div>
            </div>)
        })
        }
    </div>;
}





