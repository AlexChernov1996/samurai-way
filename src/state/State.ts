import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

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
export type ProfilePageType = {
    posts: PostType[]
    textForPost: string
}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
export type StoreType = {
    state: StateType
    callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionTypes) => void
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

    dispatch(action: ActionTypes) {
        profileReducer(this.getState().profilePage, action)
        dialogsReducer(this.getState().dialogsPage, action)
        this.callSubscriber()
    }
}

// @ts-ignore
window.state = store
