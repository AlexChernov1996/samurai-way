type FullNameType = {
    name: string
    secondName?: string
    surname: string
}
type PlaceType = {
    country?: string
    city?: string
}
type UserType = {
    id: string
    status: string
    fullName: FullNameType
    place?: PlaceType
    ava: string
    followed: boolean
}
type FollowAT = {
    type: "FOLLOW" | "UNFOLLOW"
    payload: { id: string }
}
type GetUsers = {
    type: "GET-USERS"
    payload: { users: UserType[] }
}
const initState =
    [
        {
            id: new Date().getTime().toString(),
            status: 'Creator',
            fullName: {name: 'Alex', surname: 'Chernov'},
            place: {country: 'Ukraine', city: 'Odessa'},
            ava: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/49/Groot_Profile%281%29.png/revision/latest?cb=20170505124433&path-prefix=ru',
            followed: true
        },
        {
            id: new Date().getTime().toString(),
            status: 'not the Creator',
            fullName: {name: 'Valera', surname: 'Yankoviy'},
            place: {country: 'Ukraine', city: 'Odessa'},
            ava: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/49/Groot_Profile%281%29.png/revision/latest?cb=20170505124433&path-prefix=ru',
            followed: false
        },
        {
            id: new Date().getTime().toString(),
            status: 'not the Creator',
            fullName: {name: 'Andrey', surname: 'Kolomiets'},
            place: {country: 'Ukraine', city: 'Kerch'},
            ava: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/49/Groot_Profile%281%29.png/revision/latest?cb=20170505124433&path-prefix=ru',
            followed: false
        },
    ]

type ActionTypes = FollowAT | GetUsers
export const usersReducer = (state: UserType[] = initState, action: ActionTypes) => {
    switch (action.type) {
        case 'FOLLOW':
            return state.map(u => u.id === action.payload.id ? {...u, followed: true} : u)
        case 'UNFOLLOW':
            return state.map(u => u.id === action.payload.id ? {...u, followed: false} : u)
        case 'GET-USERS':
            return [...state, action.payload.users]
    }
}
export const FollowAC = (id: string): FollowAT => ({type: "FOLLOW", payload: {id}})
export const UnFollowAC = (id: string): FollowAT => ({type: "UNFOLLOW", payload: {id}})
export const GetUsersAC = (users: UserType[]): GetUsers => ({type: "GET-USERS", payload: {users}})
