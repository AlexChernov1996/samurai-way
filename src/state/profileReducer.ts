import {ActionTypes, AddPostActionType, ChangeTextForPostActionType, ProfilePageType} from "./State";
const initState ={
    posts: [
        {id: '1', text: 'Lorem ipsum dolor sit.', likes: 4},
        {id: '2', text: 'Lorem ipsum dolor sit.', likes: 2},
    ],
    textForPost: ""
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            state.posts.push({
                id: new Date().toString(),
                text: state.textForPost,
                likes: 0
            })
            state.textForPost = ''
            return state
        case 'CHANGE-TEXT-FOR-POST':
            state.textForPost = action.text
            return state
        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => ({type: "ADD-POST"})
export const changeTextForPostAC = (text: string): ChangeTextForPostActionType => ({type: 'CHANGE-TEXT-FOR-POST', text})
