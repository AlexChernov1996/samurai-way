import {Dispatch} from "redux";
import {authApi, LogInRequestType} from "../api/auth-api";
import {AxiosError} from "axios";

export type AuthReducerType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type AuthActionTypes = SetUserAT | IsAuthAT
let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}


export const authReducer = (state: AuthReducerType = initialState, action: AuthActionTypes): AuthReducerType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}
        case "SET-IS-AUTH":
            return {...state, isAuth: action.isAuth}
        default:
            return state
    }
}
export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: "SET-USER-DATA",
    data: {id, login, email}
} as const)
export const setIsAuthValue = (isAuth: boolean) => ({
    type: "SET-IS-AUTH",
    isAuth
} as const)
export const getAuth = () => (dispatch: any) => {
    authApi.getAuth().then(res => {
        if (res.resultCode === 0) {
            let {email, id, login} = res.data
            dispatch(setAuthUserData(id, login, email))
        }
        dispatch(setIsAuthValue(true))
    })
}
export const logInTC = (data: LogInRequestType) => (dispatch: Dispatch) => {
    authApi.logIn(data).then((res) => {
        debugger
        if (res.data.resultCode === 0) {
            dispatch(setIsAuthValue(true))
        } else throw new Error(res.data.messages[0])
    }).catch((e: AxiosError) => {
        alert(e)
    })
}
type IsAuthAT = ReturnType<typeof setIsAuthValue>
type SetUserAT = ReturnType<typeof setAuthUserData>
