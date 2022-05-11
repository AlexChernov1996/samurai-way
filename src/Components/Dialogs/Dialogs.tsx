import React from 'react';
import styles from "./dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import Message from "./Message/Message";
import {DialogsPageType} from "../../state/State";
type DialogsPropsType ={
    dialogsPage:DialogsPageType
}
const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={styles.dialogs}>
            <div className={styles.users}>
                {props.dialogsPage.dialogs.map(p =>{
                    return <Dialog id={p.id} userName={p.name} />
                })}
            </div>
            <div className={styles.messages}>
                {props.dialogsPage.messages.map(m =><Message text={m.text} id ={m.id}/> )}


            </div>
        </div>
    );
};

export default Dialogs;
