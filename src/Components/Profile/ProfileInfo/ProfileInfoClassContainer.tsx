import React from 'react';
import {ProfileInfo} from "./ProfileInfo";
import {connect} from "react-redux";
import {AppStateType} from "../../../state/store";
import {contactsUserInfoType, photosUserInfoType} from "../../../state/State";
import {
    setProfileStatus,
    setUserProfile,
    updateProfileStatus,
} from "../../../state/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {AuthRedirectHoc} from "../../../hoc/AuthRedirectHOC";
import {compose} from "redux";

type MSTPType = {
    aboutMe: string | null
    contacts: contactsUserInfoType
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: photosUserInfoType
    status: string
}
type MapDispatchToPropsType = {
    setUserProfile: (id: string) => void
    setProfileStatus: (id: string) => void
    updateProfileStatus: (status: string) => void

}
type PathParamsType = {
    userId: string
}
export  type ProfileInfoContainerPropsType = RouteComponentProps<PathParamsType> & MSTPType & MapDispatchToPropsType


class ProfileInfoClassContainer extends React.Component <ProfileInfoContainerPropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId || '19605'
        this.props.setUserProfile(userId)
        this.props.setProfileStatus(userId)
    }

    render() {
        return <ProfileInfo aboutMe={this.props.aboutMe}
                            fullName={this.props.fullName}
                            lookingForAJob={this.props.lookingForAJob}
                            lookingForAJobDescription={this.props.lookingForAJobDescription}
                            userId={this.props.userId}
                            photos={this.props.photos}
                            contacts={this.props.contacts}
                            status={this.props.status}
                            updateStatus={this.props.updateProfileStatus}
        />
    };
}

const mapStateToProps = (state: AppStateType): MSTPType => {
    return {
        aboutMe: state.profilePage.userInfo.aboutMe,
        contacts: state.profilePage.userInfo.contacts,
        lookingForAJob: state.profilePage.userInfo.lookingForAJob,
        lookingForAJobDescription: state.profilePage.userInfo.lookingForAJobDescription,
        fullName: state.profilePage.userInfo.fullName,
        userId: state.profilePage.userInfo.userId,
        photos: state.profilePage.userInfo.photos,
        status: state.profilePage.status
    }
}
export default compose<React.ComponentType>(AuthRedirectHoc, withRouter,
    connect(mapStateToProps, {setUserProfile, setProfileStatus, updateProfileStatus}))(ProfileInfoClassContainer)

