import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {LogInFormPage} from "./Components/Login/LoginPage";
import UsersContainer from "./Components/Users/UsersContainer";


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
            <Route render={() => <LogInFormPage/>} path={'/login'}/>
        </div>
    );
}

export default App;
