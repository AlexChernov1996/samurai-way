import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";

const rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer
})

export const store = createStore(rootReducer)
export type StoreTypeOf = typeof store
export type AppStateType = ReturnType<typeof rootReducer>
