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
    state: StateType
    callSubscriber: () => void
    addPost: (text: string) => void
    changeTextForPost: (text: string) => void
    subscribe: (observer:() => void) => void
}
export const store = {
    state: {
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

    addPost(text: string) {
        this.state.profilePage.posts.push({id: new Date().toString(), text, likes: 0})
        this.callSubscriber()
        this.state.profilePage.textForPost = ''
    },
    changeTextForPost(text: string) {
        this.state.profilePage.textForPost = text
        this.callSubscriber()
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
