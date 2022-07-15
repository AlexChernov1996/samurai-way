import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/LoginPage";


function App() {
    return (
        <div className="App">
            <HeaderContainer/>
            <Navbar/>
            <Route render={() => <Profile/>}
                   path={'/profile/:userId?'}
            />
            <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
            <Route render={() => <UsersContainer/>} path={'/users'}/>
            <Route render={() => <LoginPage/>} path={'/login'}/>
        </div>
    );
}

export default App;
