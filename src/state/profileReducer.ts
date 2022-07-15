import {ActionTypes, AddPostActionType, ChangeTextForPostActionType, ProfilePageType, UserInfoType} from "./State";
import {profileApi} from "../api/profile-api";

export type SetUserInfoAT = ReturnType<typeof setUser>
const initState:ProfilePageType = {
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
        fullName: "samurai dimych",
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
    posts: [
        {id: '1', text: 'Lorem ipsum dolor sit.', likes: 4},
        {id: '2', text: 'Lorem ipsum dolor sit.', likes: 2},
    ],
    textForPost: ""
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes):ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let copy = {
                ...state, posts: [{
                    id: new Date().toString(),
                    text: state.textForPost,
                    likes: 0
                }, ...state.posts]
            }
            copy.textForPost = ''
            return copy

        case 'CHANGE-TEXT-FOR-POST':
            return {...state, textForPost: action.text}
        case "SET-USER":
            return {...state,userInfo:action.userInfo}
        default:
            return state
    }
}
export const addPost = (): AddPostActionType => ({type: "ADD-POST"})
export const changeTextForPost = (text: string): ChangeTextForPostActionType => ({type: 'CHANGE-TEXT-FOR-POST', text})
export const setUser = (userInfo:UserInfoType) =>({type:"SET-USER",userInfo}as const)
export const setUserProfile = (userId:string)=>(dispatch:any)=>{
    profileApi.getUsersProfile(userId)
        .then((res) => {
            dispatch(setUser(res.data))
        })
}
