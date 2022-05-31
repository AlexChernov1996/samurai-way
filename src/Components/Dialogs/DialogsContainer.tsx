import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageAC, changeTextForMessageAC} from "../../state/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../state/store";
import {Dispatch} from "redux";
import {DialogsPageType} from "../../state/State";

// const DialogsContainer = () => {
//     return <Context.Consumer>
//         {(store) => {
//             const dialogsPage = store.getState().dialogsPage
//             const addMessage = () => {
//                 store.dispatch(addMessageAC())
//             }
//             const changeNewTextForMessage = (text: string) => {
//                 store.dispatch(changeTextForMessageAC(text))
//             }
//             return <Dialogs addMessage={addMessage}
//                             changeTextForMessage={changeNewTextForMessage}
//                             dialogsPage={dialogsPage}
//             />
//         }}
//     </Context.Consumer>
// };
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;
