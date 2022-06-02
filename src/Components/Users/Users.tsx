import React from 'react';
import {FullNameType, PlaceType, UserType} from "../../state/usersReducer";
import s from "./users.module.css"

type UsersPropsType = {
    users: UserType[]
    follow: (id: string) => void
    unFollow: (id: string) => void
    getUsers: (users: UserType[]) => void
}
const Users = (props: UsersPropsType) => {
    const getFullName = (fullName: FullNameType): string => {
        return `${fullName.name} ${fullName.secondName || ''} ${fullName.surname}`
    }
    const getAddress = (address: PlaceType): string => {
        return `${address.country || ''} ${address.city || ''}`
    }
    return (<div>
        {props.users.map(u => {
            return <div className={s.wrapper} key={u.id}>
                <div className={s.ava_follow}><img src={u.ava} alt="avatar"/>
                    {u.followed
                        ? <button onClick={() => props.unFollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                    }
                </div>
                <div className={s.name_status}>
                    <h3>{getFullName(u.fullName)}</h3>
                    <p>{u.status}</p>
                </div>
                <div className={s.address}>
                    <p>{u.place && getAddress(u.place)}</p>
                </div>
            </div>
        })}

    </div>);
};

export default Users;
