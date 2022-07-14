import Header from "./Header";
import React from 'react'
import {connect} from "react-redux";
import {AppStateType} from "../../state/store";
import {getAuth, setAuthUserData, setIsAuthValue} from "../../state/authReducer";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuth()
    }
    render() {
        return <Header isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({isAuth: state.auth.isAuth})
export default connect(mapStateToProps, {setAuthUserData, setIsAuthValue, getAuth})(HeaderContainer)

