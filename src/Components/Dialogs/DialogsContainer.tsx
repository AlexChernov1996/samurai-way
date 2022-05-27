import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC, changeTextForMessageAC} from "../../state/dialogsReducer";
import {Context} from "../../Context";

const DialogsContainer = () => {
    return <Context.Consumer>
        {(store) => {
            const dialogsPage = store.getState().dialogsPage
            const addMessage = () => {
                store.dispatch(addMessageAC())
            }
            const changeNewTextForMessage = (text: string) => {
                store.dispatch(changeTextForMessageAC(text))
            }
            return <Dialogs addMessage={addMessage}
                            changeTextForMessage={changeNewTextForMessage}
                            dialogsPage={dialogsPage}
            />
        }}
    </Context.Consumer>
};

export default DialogsContainer;
