import {connect} from "react-redux";
import {
    follow,
    getTotalUsersCount,
    getUsers, setCurrentPage, setFetching,
    unFollow,
    UserType
} from "../../state/usersReducer";
import {AppStateType} from "../../state/store";
import React, {ChangeEvent} from "react";
import axios from "axios";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: UserType[]
    count: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
}
// type MapDispatchToPropsType = {
//     follow: (id: number) => void
//     unFollow: (id: number) => void
//     getUsers: (users: UserType[]) => void
//     getTotalUsersCount: (usersCount: number) => void
//     setCurrentPage: (value: number) => void
//     setFetching: (value: boolean) => void
// }
type UsersPropsType = {
    users: UserType[]
    count: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (id: number) => void
    unFollow: (id: number) => void
    getUsers: (users: UserType[]) => void
    getTotalUsersCount: (usersCount: number) => void
    setCurrentPage: (value: number) => void
    setFetching: (value: boolean) => void
}

export class UsersContainerCC extends React.Component<UsersPropsType, {}> {
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${this.props.currentPage}`).then(res => {
            this.props.getUsers(res.data.items)
            this.props.getTotalUsersCount(res.data.totalCount)
            this.props.setFetching(false)

        })
    }

    setCurrentPageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(+e.currentTarget.value)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.count}&page=${e.currentTarget.value}`).then(res => {
            this.props.setFetching(false)
            this.props.getUsers(res.data.items)
        })
    }

    render() {
        return <Users
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            count={this.props.count}
            currentPage={this.props.currentPage} setCurrentPageHandler={this.setCurrentPageHandler}
            totalUsersCount={this.props.totalUsersCount}
            isFetching={this.props.isFetching}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
//     return {
//         follow: (id: number) => {
//             dispatch(follow(id))
//         },
//         unFollow: (id: number) => {
//             dispatch(unFollow(id))
//         },
//         getUsers: (users: UserType[]) => {
//             dispatch(getUsers(users))
//         },
//         getTotalUsersCount: (usersCount: number) => {
//             dispatch(getTotalUsersCount(usersCount))
//         },
//         setCurrentPage: (value: number) => {
//             dispatch(setCurrentPage(value))
//         },
//         setFetching: (value: boolean) => {
//             dispatch(setFetching(value))
//         }
//     }
// }
export const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, getUsers, getTotalUsersCount, setCurrentPage, setFetching
})(UsersContainerCC)
