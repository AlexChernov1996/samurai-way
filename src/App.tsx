import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {UsersContainer} from "./Components/Users/UsersContainer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Route render={() => <Profile/>}
                   path={'/profile'}
            />
            <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
            <Route render={() => <UsersContainer/>} path={'/users'}/>
        </div>
    );
}

export default App;
