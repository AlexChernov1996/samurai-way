import {connect} from "react-redux";
import {Dispatch} from "redux";
import {
    FollowAC,
    GetTotalUsersCountAC,
    GetUsersAC, SetCurrentPageAC,
    UnFollowAC,
    UserType
} from "../../state/usersReducer";
import {AppStateType} from "../../state/store";
import {UsersClass} from "./UsersClass";

type MapStateToPropsType = {
    users: UserType[]
    count: number
    currentPage: number
    totalUsersCount:number
}
type MapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    getUsers: (users: UserType[]) => void
    getTotalUsersCount:(usersCount:number)=>void
    setCurrentPage:(value:number)=>void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        count: state.usersPage.count,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(FollowAC(id))
        },
        unFollow: (id: number) => {
            dispatch(UnFollowAC(id))
        },
        getUsers: (users: UserType[]) => {
            dispatch(GetUsersAC(users))
        },
        getTotalUsersCount:(usersCount:number)=>{
            dispatch(GetTotalUsersCountAC(usersCount))
        },
        setCurrentPage:(value:number)=> {
            dispatch(SetCurrentPageAC(value))
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
