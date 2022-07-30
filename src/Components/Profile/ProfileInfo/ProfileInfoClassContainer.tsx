import React from 'react';
import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType} from "../../../state/store";
import {UserInfoType} from "../../../state/State";
import {setUserProfile} from "../../../state/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthRedirectHoc} from "../../../hoc/AuthRedirectHOC";
import {compose} from "redux";


type MapDispatchToPropsType = {
    setUserProfile: (id: string) => void
}
type PathParamsType = {
    userId: string
}
export  type ProfileInfoContainerPropsType = RouteComponentProps<PathParamsType> & UserInfoType & MapDispatchToPropsType


class ProfileInfoClassContainer extends React.Component <ProfileInfoContainerPropsType, {}> {
    componentDidMount() {
        this.props.setUserProfile(this.props.match.params.userId)
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
export default compose<React.ComponentType>(AuthRedirectHoc, withRouter, connect(mapStateToProps, {setUserProfile}))(ProfileInfoClassContainer)

