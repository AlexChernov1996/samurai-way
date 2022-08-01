import {SetProfileStatusAT, SetUserInfoAT, UpdateProfileStatusAT} from "./profileReducer";

export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    text: string
}
export type PostType = {
    id: string
    text: string
    likes: number
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    textForNewMessage: string
}
export type contactsUserInfoType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type photosUserInfoType = {
    small: string | null
    large: string | null
}
export type UserInfoType = {
    aboutMe: string | null
    contacts: contactsUserInfoType
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string
    userId: number
    photos: photosUserInfoType
}
export type ProfilePageType = {
    userInfo: UserInfoType
    posts: PostType[]
    status: string
    textForPost: string
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type AddPostActionType = {
    type: "ADD-POST"
}
export type ChangeTextForPostActionType = {
    type: 'CHANGE-TEXT-FOR-POST'
    text: string
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type ChangeTextForMessageActionType = {
    type: 'CHANGE-TEXT-FOR-MESSAGE'
    text: string
}
export type ActionTypes =
    ChangeTextForPostActionType
    | AddPostActionType
    | AddMessageActionType
    | ChangeTextForMessageActionType
    | SetUserInfoAT | SetProfileStatusAT | UpdateProfileStatusAT
export const store = {
    _state: {
        dialogsPage: {
            dialogs: [
                {id: '1', name: 'Dima'},
                {id: '2', name: 'Kolya'},
                {id: '3', name: 'Sasha'},
                {id: '4', name: 'Katya'},
            ],
            messages: [
                {id: '1', text: 'Lorem ipsum.'},
                {id: '2', text: 'Lorem ipsum12331.'},
                {id: '3', text: 'Lorem ipsum12311ddfwe dfss.'},
            ],
            textForNewMessage: '1111'
        },
        profilePage: {
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
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this.callSubscriber = observer
    },
    callSubscriber() {
        console.log('state has changed')
    },


}

// @ts-ignore
window.state = store
