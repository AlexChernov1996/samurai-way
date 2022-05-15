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
    addPost:(text:string)=>void
}

function App(props: AppPropsType) {
    return (
            <div className="App">
                <Header/>
                <Navbar/>
                <Route render={() => <Profile profilePage = {props.store.profilePage} addPost={props.addPost} />} path={'/profile'}/>
                <Route render={() => <Dialogs dialogsPage = {props.store.dialogsPage}/>} path={'/dialogs'}/>
            </div>
    );
}

export default App;
