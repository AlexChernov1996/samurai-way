import React from 'react';
import ProfileInfo from "./ProfileInfo";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../../state/store";
import {UserInfoType} from "../../../state/State";
import {setUser} from "../../../state/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapDispatchToPropsType = {
    setUser: (user: UserInfoType) => void
}
type PathParamsType = {
    userId: string
}
export  type ProfileInfoContainerPropsType = RouteComponentProps<PathParamsType> & UserInfoType & MapDispatchToPropsType


class ProfileInfoClassContainer extends React.Component <ProfileInfoContainerPropsType, {}> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then((res) => {
                this.props.setUser(res.data)
            })
    }

    render() {
        return <ProfileInfo aboutMe={this.props.aboutMe}
                            fullName={this.props.fullName}
                            lookingForAJob={this.props.lookingForAJob}
                            lookingForAJobDescription={this.props.lookingForAJobDescription}
                            userId={this.props.userId}
                            photos={this.props.photos}
                            contacts={this.props.contacts}/>
    };
}

const mapStateToProps = (state: AppStateType): UserInfoType => {
    return {
        aboutMe: state.profilePage.userInfo.aboutMe,
        contacts: state.profilePage.userInfo.contacts,
        lookingForAJob: state.profilePage.userInfo.lookingForAJob,
        lookingForAJobDescription: state.profilePage.userInfo.lookingForAJobDescription,
        fullName: state.profilePage.userInfo.fullName,
        userId: state.profilePage.userInfo.userId,
        photos: state.profilePage.userInfo.photos,
    }
}
export let ProfileInfoContainerWithURLData = withRouter(ProfileInfoClassContainer)
export let ProfileInfoContainer = connect(mapStateToProps, {setUser})(ProfileInfoContainerWithURLData)
export default ProfileInfoClassContainer;
