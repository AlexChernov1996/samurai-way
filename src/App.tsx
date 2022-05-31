import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";

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
