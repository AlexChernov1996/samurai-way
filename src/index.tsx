import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {ReducersType, store} from "./state/store";
import React from "react";
let callSubscriber = (state:ReducersType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch={store.dispatch} store={store.getState()}/>
        </BrowserRouter>,
        document.getElementById('root')
    );}
callSubscriber(store.getState())
store.subscribe(()=> {
    let state = store.getState()
    callSubscriber(state)
})
