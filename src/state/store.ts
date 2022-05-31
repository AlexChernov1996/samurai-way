import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";

const rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer
})

export const store = createStore(rootReducer)
export type StoreTypeOf = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
