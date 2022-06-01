import {ActionTypes, AddMessageActionType, ChangeTextForMessageActionType, DialogsPageType} from "./State";

const initState = {
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
}
export const dialogsReducer = (state: DialogsPageType = initState, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let copy = {
                ...state,
                messages: [...state.messages, {id: new Date().toString(), text: state.textForNewMessage}]
            }
            copy.textForNewMessage =''
            return copy
        case 'CHANGE-TEXT-FOR-MESSAGE':
            return {...state, textForNewMessage: action.text}
        default:
            return state
    }
}

export const changeTextForMessageAC = (text: string): ChangeTextForMessageActionType => ({
    type: 'CHANGE-TEXT-FOR-MESSAGE',
    text
})
export const addMessageAC = (): AddMessageActionType => ({type: "ADD-MESSAGE"})
