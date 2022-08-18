import React from 'react';
import styles from "./dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType} from "../../state/State";
import AddMessageForm, {FormDataType} from "./AddMessageForm/AddMessageForm";


type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (message: string) => void
    changeTextForMessage: (text: string) => void
}
const Dialogs = (props: DialogsPropsType) => {

    const onSub = (FormData: FormDataType) => {
        props.addMessage(FormData.messageBody)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.users}>
                {props.dialogsPage.dialogs.map(p => {
                    return <Dialog key={p.id} id={p.id} userName={p.name}/>
                })}
            </div>
            <div className={styles.messages}>
                {props.dialogsPage.messages.map(m => <Message text={m.text} id={m.id}/>)}
                <AddMessageForm onSubmit={onSub}/>
            </div>
        </div>
    );
};

export default Dialogs;
