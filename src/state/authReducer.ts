export type authReducerType = {
    id: number | null
    login: string | null
    email: string | null
}

type AuthActionTypes = SetUserAT
let initialState = {
    id: null,
    login: null,
    email: null
}


export const authReducer = (state: authReducerType = initialState, action: AuthActionTypes): authReducerType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.data}
        default:
            return state

    }

}
const setUserData = (id: number, login: string, email: string) => ({
    type: "SET-USER-DATA",
    data: {id, login, email}
} as const)
type SetUserAT = ReturnType<typeof setUserData>
