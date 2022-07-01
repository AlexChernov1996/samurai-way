import {connect} from "react-redux";
import {
    follow,
    getTotalUsersCount,
    getUsers, setIsFollowing, setCurrentPage, setFetching,
    unFollow,
    UserType
} from "../../state/usersReducer";
import {AppStateType} from "../../state/store";
import React, {ChangeEvent} from "react";
import {Users} from "./Users";
import {usersApi} from "../../api/users-api";

type MapStateToPropsType = {
    users: UserType[]
    count: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    isFollowing:number[]
}
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
    isFollowing:number[]
    setIsFollowing:(value:boolean,id:number)=>void
}

export class UsersContainerCC extends React.Component <UsersPropsType, {}> {
    componentDidMount() {
        this.props.setFetching(true)
        usersApi.getUsers(this.props.count,this.props.currentPage).then(res => {
            this.props.getUsers(res.items)
            this.props.getTotalUsersCount(res.totalCount)
            this.props.setFetching(false)
        })
    }

    setCurrentPageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(+e.currentTarget.value)
        usersApi.getUsers(this.props.count,+e.currentTarget.value)
        .then(res => {
            this.props.setFetching(false)
            this.props.getUsers(res.items)
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
            isFollowing={this.props.isFollowing}
            setIsFollowing={this.props.setIsFollowing}

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
        isFollowing:state.usersPage.isFollowing
    }
}
export const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, getUsers, getTotalUsersCount, setCurrentPage, setFetching,setIsFollowing
})(UsersContainerCC)
