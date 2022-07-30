import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC, changeTextForMessageAC} from "../../state/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../state/store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../state/State";
import {AuthRedirectHoc} from "../../hoc/AuthRedirectHOC";

type MapDispatchToPropsType = {
    changeTextForMessage: (text: string) => void
    addMessage: () => void
}
type MapStateToProps = {
    dialogsPage: DialogsPageType
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeTextForMessage: (text: string) => {
            dispatch(changeTextForMessageAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}
export default AuthRedirectHoc(connect(mapStateToProps, mapDispatchToProps)(Dialogs))

