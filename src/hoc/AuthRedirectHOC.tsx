import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../state/store";
type MSTPType = {
    isAuth:boolean
}
let mapStateToProps = (state:AppStateType):MSTPType=>{
    return {
        isAuth:state.auth.isAuth
    }
}
export function AuthRedirectHoc <T> (Component:ComponentType<T>)  {
    function WithAuthRedirect (props:MSTPType){
        let {isAuth,...restProps} = props
            if (!isAuth) return<Redirect to={'/login'}/>
            return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(WithAuthRedirect)
}


