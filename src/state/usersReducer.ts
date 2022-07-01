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
type SetFetchingAT = ReturnType<typeof setFetching>
type IsFollowing = ReturnType<typeof setIsFollowing>
export type UsersStateType = {
    users: UserType[]
    count: number //How many users we see in one page
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: number[]
}

const initState: UsersStateType = {
    users: [],
    count: 5,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    isFollowing: []
}
type ActionTypes = FollowAT | GetUsersAT | GetTotalUsersCountAT | SetCurrentPageAT | SetFetchingAT | IsFollowing
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
        case "IS-FOLLOWING":
            return {
                ...state,
                isFollowing: action.payload.value
                    ? [...state.isFollowing, action.payload.id]
                    : state.isFollowing.filter(id => id !== action.payload.id)
            }
        default:
            return state
    }
}
export const follow = (id: number): FollowAT => ({type: "FOLLOW", payload: {id}})
export const getTotalUsersCount = (usersCount: number): GetTotalUsersCountAT => ({
    type: "GET-TOTAL-USERS-COUNT",
    payload: {usersCount}
})
export const unFollow = (id: number): FollowAT => ({type: "UNFOLLOW", payload: {id}})
export const getUsers = (users: UserType[]): GetUsersAT => ({type: "GET-USERS", payload: {users}})
export const setCurrentPage = (value: number): SetCurrentPageAT => ({type: "SET-CURRENT-PAGE", payload: {value}})
export const setFetching = (value: boolean) => ({type: "SET-FETCHING-PAGE", payload: {value}} as const)
export const setIsFollowing = (value: boolean, id: number) => ({type: "IS-FOLLOWING", payload: {value, id}} as const)
