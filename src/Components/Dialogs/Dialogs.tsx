import React, {ChangeEvent} from 'react';
import styles from "./dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import Message from "./Message/Message";
import {ActionTypes, DialogsPageType} from "../../state/State";
import {addMessageAC, changeTextForMessageAC} from "../../state/dialogsReducer";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionTypes) => void
}
const Dialogs = (props: DialogsPropsType) => {
const changeMessageTextHandler =(e:ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(changeTextForMessageAC(e.currentTarget.value))
}
const addNewMessage =()=>{
    props.dispatch(addMessageAC())
}

    return (
        <div className={styles.dialogs}>
            <div className={styles.users}>
                {props.dialogsPage.dialogs.map(p => {
                    return <Dialog id={p.id} userName={p.name}/>
                })}
            </div>
            <div className={styles.messages}>
                {props.dialogsPage.messages.map(m => <Message text={m.text} id={m.id}/>)}

                <div>
                <textarea value={props.dialogsPage.textForNewMessage} onChange={changeMessageTextHandler}/>
                    <button onClick={addNewMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
