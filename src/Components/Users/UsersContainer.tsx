import {connect} from "react-redux";
import {Dispatch} from "redux";
import {FollowAC, GetUsersAC, UnFollowAC, UserType} from "../../state/usersReducer";
import {AppStateType} from "../../state/store";
import Users from "./Users";

type MapStateToPropsType = {
    users: UserType[]
}
type MapDispatchToPropsType = {
    follow: (id: string) => void
    unFollow: (id: string) => void
    getUsers: (users: UserType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {users: state.usersPage}
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: string) => {
            dispatch(FollowAC(id))
        },
        unFollow: (id: string) => {
            dispatch(UnFollowAC(id))
        },
        getUsers: (users: UserType[]) => {
            GetUsersAC(users)
        }
    }

}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
