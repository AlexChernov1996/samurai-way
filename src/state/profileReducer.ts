import {ActionTypes, AddPostActionType, ChangeTextForPostActionType, ProfilePageType, UserInfoType} from "./State";
import {profileApi} from "../api/profile-api";

export type SetUserInfoAT = ReturnType<typeof setUser>
export type SetProfileStatusAT = ReturnType<typeof getStatus>
export type UpdateProfileStatusAT = ReturnType<typeof updateStatus>

const initState: ProfilePageType = {
    userInfo: {
        aboutMe: "я круто чувак 1001%",
        contacts: {
            facebook: "facebook.com",
            website: null,
            vk: "vk.com/dimych",
            twitter: "https://twitter.com/@sdf",
            instagram: "instagra.com/sds",
            youtube: null,
            github: "github.com",
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: "не ищу, а дурачусь",
        fullName: "samurai ",
        userId: 19605,
        photos: {
            small: null,
            large: null
        },
    },
    status: '',
    posts: [],
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state, posts: [{
                    id: new Date().toString(),
                    text: action.postText,
                    likes: 0
                }, ...state.posts]
            }
        case "SET-USER":
            return {...state, userInfo: action.userInfo}
        case "GET-STATUS":
            return {...state, status: action.status}
        case "SET-STATUS":
            return {...state, status: action.status}
        default:
            return state
    }
}
export const addPost = (postText: string): AddPostActionType => ({type: "ADD-POST", postText})
export const changeTextForPost = (text: string): ChangeTextForPostActionType => ({type: 'CHANGE-TEXT-FOR-POST', text})
export const setUser = (userInfo: UserInfoType) => ({type: "SET-USER", userInfo} as const)
export const getStatus = (status: string) => ({type: "GET-STATUS", status} as const)
export const updateStatus = (status: string) => ({type: "SET-STATUS", status} as const)
export const setProfileStatus = (userId: string) => (dispatch: any) => {
    profileApi.getProfileStatus(userId)
        .then((res) => {
            dispatch(getStatus(res.data))
        })
}
export const updateProfileStatus = (status: string) => (dispatch: any) => {
    profileApi.setProfileStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(updateStatus(status))
            }
        })
}
export const setUserProfile = (userId: string) => (dispatch: any) => {
    profileApi.getUsersProfile(userId)
        .then((res) => {
            dispatch(setUser(res.data))
        })
}
