import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./state/State";
import React from "react";
let callSubscriber = ()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );}
store.subscribe(callSubscriber)
store.callSubscriber()
