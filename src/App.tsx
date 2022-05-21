import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {StoreType} from "./state/State";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <div className="App">
            <Header/>
            <Navbar/>
            <Route render={() => <Profile profilePage={props.store.state.profilePage}
                                          addPost={props.store.addPost.bind(props.store)}
                                          changeTextForPost={props.store.changeTextForPost.bind(props.store)}
            />}
                   path={'/profile'}
            />
            <Route render={() => <Dialogs dialogsPage={props.store.state.dialogsPage}/>} path={'/dialogs'}/>
        </div>
    );
}

export default App;
