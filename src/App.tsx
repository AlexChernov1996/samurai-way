import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navbar/>
                <Route component={Profile} path={'/profile'}/>
                <Route component={Dialogs} path={'/dialogs'}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
