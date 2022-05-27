import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from "./state/store";
import React from "react";
import {Provider} from "./Context";
import {StateType} from "./state/State";

let callSubscriber = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    )
    ;
}
callSubscriber(store.getState())
store.subscribe(() => {
    let state = store.getState()
    callSubscriber(state)
})
