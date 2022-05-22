import {ActionTypes, AddMessageActionType, ChangeTextForMessageActionType, DialogsPageType} from "./State";

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            state.messages.push({
                id: new Date().toString(),
                text: state.textForNewMessage,
            })
            state.textForNewMessage = ''
            return state
        case 'CHANGE-TEXT-FOR-MESSAGE':
            state.textForNewMessage = action.text
            return state
        default:
            return state
    }
}

export const changeTextForMessageAC = (text: string): ChangeTextForMessageActionType => ({
    type: 'CHANGE-TEXT-FOR-MESSAGE',
    text
})
export const addMessageAC = (): AddMessageActionType => ({type: "ADD-MESSAGE"})
