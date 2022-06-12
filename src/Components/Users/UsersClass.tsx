import {UserType} from "../../state/usersReducer";
import React, {ChangeEvent} from "react";
import s from "./users.module.css";
import axios from "axios";

type UsersPropsType = {
    users: UserType[]
    count: number
    totalUsersCount: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    getUsers: (users: UserType[]) => void
    getTotalUsersCount: (usersCount: number) => void
    setCurrentPage: (value: number) => void
}

export class UsersClass extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`).then(res => {
            this.props.getUsers(res.data.items)
            this.props.getTotalUsersCount(res.data.totalCount)
        })
    }

    setCurrentPageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.setCurrentPage(+e.currentTarget.value)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${e.currentTarget.value}`).then(res => {
            this.props.getUsers(res.data.items)
        })
    }

    render() {
        let allPages = Math.ceil(this.props.totalUsersCount / this.props.count)
        let pages = []
        for (let i = 1; i < allPages; i++) {
            pages.push(i)
        }
        return <div>
            <input type="range" value={this.props.currentPage} onChange={this.setCurrentPageHandler}
                   max={pages[pages.length - 1]}/> {this.props.currentPage}
            {this.props.users.map((u) => {
                return (<div className={s.wrapper} key={u.id}>
                    <div className={s.ava_follow}>
                        <img
                            src={u.photos.small || 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'}
                            alt="avatar"/>
                        {u.followed
                            ? <button onClick={() => this.props.unFollow(u.id)}>Unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}
