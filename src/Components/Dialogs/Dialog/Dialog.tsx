import {NavLink} from "react-router-dom";
import React from "react";
import styles from "../../Navbar/navbar.module.css";

type DialogPropsType = {
    id: string
    userName: string
}
export const Dialog = (props: DialogPropsType) => {
    return (
        <NavLink className={() => styles.list} activeClassName={styles.listActive}
                 to={`/dialogs/${props.id}`}>{props.userName}</NavLink>
    )

}
