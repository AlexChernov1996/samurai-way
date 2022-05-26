import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";

const reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})
export const store = createStore(reducers)

export type ReducersType = ReturnType<typeof reducers>
