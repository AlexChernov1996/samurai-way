
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
export type StoreType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
export const store = {
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
}
let rerenderTree = ()=>{
    console.log('state has changed')
}
export const addPost = (text: string) => {
    store.profilePage.posts.push({id: new Date().toString(), text, likes: 0})
    rerenderTree()
    store.profilePage.textForPost = ''
}
export const changeTextForPost = (text: string) => {
    store.profilePage.textForPost = text
    rerenderTree()
}
export const subscribe = (observer:any) => {
  rerenderTree = observer
}
// @ts-ignore
window.state = store
