import Header from "./Header";
import React from 'react'
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../state/store";
import {authReducerType, setAuthUserData, setIsAuthValue} from "../../state/authReducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true}).then(res => {
           if( res.data.resultCode === 0){
            let {email, id, login} = res.data.data
            this.props.setAuthUserData(id, login, email)}
           this.props.setIsAuthValue(true)
        })
    }

    render() {
        return <Header isAuth = {this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({isAuth:state.auth.isAuth})
export default connect(mapStateToProps, { setAuthUserData,setIsAuthValue})(HeaderContainer)

