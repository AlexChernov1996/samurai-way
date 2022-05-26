import React from 'react';
import { store } from '../../state/store';
import Dialogs from "./Dialogs";
import {addMessageAC, changeTextForMessageAC} from "../../state/dialogsReducer";

const DialogsContainer = () => {
    const dialogsPage = store.getState().dialogsPage
    const addMessage =()=>{
        store.dispatch(addMessageAC())
    }
    const changeNewTextForMessage = (text:string) =>{
        store.dispatch(changeTextForMessageAC(text))
}
    return <Dialogs addMessage={addMessage}
        changeTextForMessage={changeNewTextForMessage}
       dialogsPage={dialogsPage}
        />
};

export default DialogsContainer;
