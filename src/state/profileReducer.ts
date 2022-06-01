import {ActionTypes, AddPostActionType, ChangeTextForPostActionType, ProfilePageType} from "./State";

const initState = {
    posts: [
        {id: '1', text: 'Lorem ipsum dolor sit.', likes: 4},
        {id: '2', text: 'Lorem ipsum dolor sit.', likes: 2},
    ],
    textForPost: ""
}

export const profileReducer = (state: ProfilePageType = initState, action: ActionTypes) => {
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
            return state
        case 'CHANGE-TEXT-FOR-POST':
            return {...state, textForPost: action.text}
        default:
            return state
    }
}
export const addPostAC = (): AddPostActionType => ({type: "ADD-POST"})
export const changeTextForPostAC = (text: string): ChangeTextForPostActionType => ({type: 'CHANGE-TEXT-FOR-POST', text})
