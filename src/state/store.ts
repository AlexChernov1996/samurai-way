import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage:usersReducer,
    auth:authReducer
})

export const store = createStore(rootReducer)
export type AppStateType = ReturnType<typeof rootReducer>
//@ts-ignore
window.store = store
