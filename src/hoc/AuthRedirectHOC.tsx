import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../state/store";

export function AuthRedirectHoc <T> (Component:ComponentType<T>)  {
    let mapStateToProps = (state:AppStateType)=>{
        return {
            isAuth:state.auth.isAuth
        }
    }
    function WithAuthRedirect (props:any){
        let {isAuth,...restProps} = props
            if (!isAuth) return<Redirect to={'/login'}/>
            return <Component {...restProps}/>
    }
    return connect(mapStateToProps)(WithAuthRedirect)
}


