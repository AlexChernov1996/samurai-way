export type UserType = {
    "name": string,
    "id": number,
    "uniqueUrlName": string | null
    "photos": {
        "small": string | null
        "large": string | null
    },
    "status": string | null
    "followed": boolean
}
type FollowAT = {
    type: "FOLLOW" | "UNFOLLOW"
    payload: { id: number }
}
type SetCurrentPageAT = {
    type: "SET-CURRENT-PAGE"
    payload: { value: number }
}
type GetTotalUsersCountAT = {
    type: "GET-TOTAL-USERS-COUNT"
    payload: { usersCount: number }
}
type GetUsersAT = {
    type: "GET-USERS"
    payload: { users: UserType[] }
}
type SetFetchingAT = ReturnType<typeof SetFetchingAC>
export type UsersStateType = {
    users: UserType[]
    count: number //How many users we see in one page
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initState: UsersStateType = {
    users: [],
    count: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false
}
type ActionTypes = FollowAT | GetUsersAT | GetTotalUsersCountAT | SetCurrentPageAT | SetFetchingAT
export const usersReducer = (state: UsersStateType = initState, action: ActionTypes): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        case 'GET-USERS':
            return {...state, users: action.payload.users}
        case 'GET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.payload.usersCount}
        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.value}
        case "SET-FETCHING-PAGE":
            return {...state, isFetching: action.payload.value}
        default:
            return state
    }
}
export const FollowAC = (id: number): FollowAT => ({type: "FOLLOW", payload: {id}})
export const GetTotalUsersCountAC = (usersCount: number): GetTotalUsersCountAT => ({
    type: "GET-TOTAL-USERS-COUNT",
    payload: {usersCount}
})
export const UnFollowAC = (id: number): FollowAT => ({type: "UNFOLLOW", payload: {id}})
export const GetUsersAC = (users: UserType[]): GetUsersAT => ({type: "GET-USERS", payload: {users}})
export const SetCurrentPageAC = (value: number): SetCurrentPageAT => ({type: "SET-CURRENT-PAGE", payload: {value}})
export const SetFetchingAC = (value: boolean) => ({type: "SET-FETCHING-PAGE", payload: {value}} as const)
