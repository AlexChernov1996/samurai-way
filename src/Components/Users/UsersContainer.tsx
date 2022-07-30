import {connect} from "react-redux";
import {
    getTotalUsersCount,
    getUsers, setIsFollowing, setCurrentPage, setFetching,
    UserType, getUsersTC, followTC, unFollowTC
} from "../../state/usersReducer";
import {AppStateType} from "../../state/store";
import React, {ChangeEvent} from "react";
import {Users} from "./Users";

type MapStateToPropsType = {
    users: UserType[]
    count: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    isFollowing: number[]
}
type UsersPropsType = {
    users: UserType[]
    count: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    getUsers: (users: UserType[]) => void
    getTotalUsersCount: (usersCount: number) => void
    setCurrentPage: (value: number) => void
    setFetching: (value: boolean) => void
    isFollowing: number[]
    setIsFollowing: (value: boolean, id: number) => void
    getUsersTC: (count: number, currentPage: number) => void
    followTC: (id: number) => void
    unFollowTC: (id: number) => void
}

export class UsersContainerCC extends React.Component <UsersPropsType, {}> {
    componentDidMount() {
        this.props.getUsersTC(this.props.count, this.props.currentPage)
    }

    setCurrentPageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.props.setCurrentPage(+e.currentTarget.value)
        this.props.getUsersTC(this.props.count, this.props.currentPage)
    }

    render() {
        return <Users
            users={this.props.users}
            count={this.props.count}
            currentPage={this.props.currentPage} setCurrentPageHandler={this.setCurrentPageHandler}
            totalUsersCount={this.props.totalUsersCount}
            isFetching={this.props.isFetching}
            isFollowing={this.props.isFollowing}
            setIsFollowing={this.props.setIsFollowing}
            follow={this.props.followTC}
            unFollow={this.props.unFollowTC}

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
        isFollowing: state.usersPage.isFollowing
    }
}

export default connect(mapStateToProps, {
    getUsers, getTotalUsersCount, setCurrentPage,
    setFetching, setIsFollowing, getUsersTC,
    followTC, unFollowTC
})(UsersContainerCC)
