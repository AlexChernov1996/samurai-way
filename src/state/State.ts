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
    _state: StateType
    callSubscriber: () => void
    changeTextForPost: (text: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    addPost: (text: string) => void
    dispatch: (action: ActionType) => void
}
type AddPostActionType = {
    type: "ADD-POST"
}
type ChangeTextForPostActionType = {
    type: 'CHANGE-TEXT-FOR-POST'
    text: string
}
export type ActionType = ChangeTextForPostActionType | AddPostActionType

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
            ]
        },
        profilePage: {
            posts: [
                {id: '1', text: 'Lorem ipsum dolor sit.', likes: 4},
                {id: '2', text: 'Lorem ipsum dolor sit.', likes: 2},
            ],
            textForPost: "It-kamasutra"
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
    changeTextForPost(text: string) {
        this.getState().profilePage.textForPost = text
        this.callSubscriber()
    },
    addPost(text: string) {
        this.getState().profilePage.posts.push({id: new Date().toString(), text, likes: 0})
        this.callSubscriber()
        this.getState().profilePage.textForPost = ''
    },
    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            this.getState().profilePage.posts.push({
                id: new Date().toString(),
                text: this.getState().profilePage.textForPost,
                likes: 0
            })
            this.callSubscriber()
            this.getState().profilePage.textForPost = ''
        } else if (action.type === 'CHANGE-TEXT-FOR-POST') {
            this.getState().profilePage.textForPost = action.text
            this.callSubscriber()
        }
    }
}

// @ts-ignore
window.state = store
