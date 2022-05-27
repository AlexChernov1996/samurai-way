import React from "react";
import { StoreType} from "./state/State";
import {StoreTypeOf} from "./state/store";

export const Context = React.createContext({} as StoreTypeOf)

export type ProviderType = {
    store: StoreTypeOf
    children: any
}
export const Provider = (props: ProviderType) => {
    return <Context.Provider value={props.store}>
        {props.children}
    </Context.Provider>
}
