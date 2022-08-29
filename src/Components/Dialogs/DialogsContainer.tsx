import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../state/store";
import {compose} from "redux";
import {DialogsPageType} from "../../state/State";
import {AuthRedirectHoc} from "../../hoc/AuthRedirectHOC";
import {addMessage} from "../../state/dialogsReducer";


type MapStateToProps = {
    dialogsPage: DialogsPageType
}
const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        dialogsPage: state.dialogsPage
    }
}


export default compose<React.ComponentType>(AuthRedirectHoc,connect(mapStateToProps, {addMessage}))(Dialogs)

