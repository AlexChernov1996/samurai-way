import {NavLink} from "react-router-dom";
import React from "react";

type DialogPropsType = {
    url: string
    userName: string
}
export const Dialog = (props: DialogPropsType) => {
    return (
        <div>
            <NavLink to={props.url}>{props.userName}</NavLink>
        </div>)

}
