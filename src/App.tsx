import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ReducersType} from "./state/store";
import {Dispatch} from "redux";
import {ActionTypes} from "./state/State";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";



function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Route render={() => <Profile/>}
                   path={'/profile'}
            />
            <Route render={() => <DialogsContainer/>} path={'/dialogs'}/>
        </div>
    );
}

export default App;
