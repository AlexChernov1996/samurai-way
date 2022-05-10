import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.users}>
              <Dialog url={'/dialogs/1'} userName={'Dima'} />
              <Dialog url={'/dialogs/2'} userName={'Kolya'} />
              <Dialog url={'/dialogs/3'} userName={'Sanya'} />
              <Dialog url={'/dialogs/4'} userName={'Yulia'} />
            </div>
            <div className={styles.messages}>
               <Message text={'Lorem ipsum.'}/>
               <Message text={'Lorem ipsum12331.'}/>
               <Message text={'Lorem ipsum12311ddfwe dfss.'}/>
            </div>
        </div>
    );
};

export default Dialogs;
