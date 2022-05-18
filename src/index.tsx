import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, store, subscribe} from "./state/State";
import React from "react";
const rerenderTree = ()=>{
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );}
rerenderTree()
subscribe(rerenderTree)
