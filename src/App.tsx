import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./state/State";

type AppPropsType = {
    store:StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route render={() => <Profile profilePage = {props.store.profilePage} />} path={'/profile'}/>
                <Route render={() => <Dialogs dialogsPage = {props.store.dialogsPage}/>} path={'/dialogs'}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
