import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, store, StoreType} from "./state/State";
import React from "react";

export const rerenderTree = (store:StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store} addPost={addPost}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
