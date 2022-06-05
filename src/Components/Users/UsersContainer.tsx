import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FollowAC, GetUsersAC, UnFollowAC, UserType} from "../../state/usersReducer";
import {AppStateType} from "../../state/store";
import {Users} from "./Users";
import {UsersClass} from "./UsersClass";

type MapStateToPropsType = {
    users: UserType[]
}
type MapDispatchToPropsType = {
    follow: (id: number) => void
    unFollow: (id: number) => void
    getUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {users: state.usersPage}
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
        }
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)
