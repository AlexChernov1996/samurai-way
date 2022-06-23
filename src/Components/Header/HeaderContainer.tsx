import Header from "./Header";
import React from 'react'
import axios from "axios";

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`,{withCredentials:true}).then(res=>{

        })
    }

    render() {
        return <Header/>
    }
}

export default HeaderContainer
