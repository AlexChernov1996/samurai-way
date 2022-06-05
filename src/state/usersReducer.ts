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
    // id: string
    // status: string
    // fullName: FullNameType
    // place?: PlaceType
    // ava: string
    // followed: boolean
}
type FollowAT = {
    type: "FOLLOW" | "UNFOLLOW"
    payload: { id: number }
}
type GetUsers = {
    type: "GET-USERS"
    payload: { users: UserType[] }
}
const initState: UserType[] =
    [
        // {
        //     id: new Date().getTime().toString() +'1',
        //     status: 'Creator',
        //     fullName: {name: 'Alex', surname: 'Chernov'},
        //     place: {country: 'Ukraine', city: 'Odessa'},
        //     ava: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/49/Groot_Profile%281%29.png/revision/latest?cb=20170505124433&path-prefix=ru',
        //     followed: true
        // },
        // {
        //     id: new Date().getTime().toString() + '3',
        //     status: 'not the Creator',
        //     fullName: {name: 'Valera', surname: 'Yankoviy'},
        //     place: {country: 'Ukraine', city: 'Odessa'},
        //     ava: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/49/Groot_Profile%281%29.png/revision/latest?cb=20170505124433&path-prefix=ru',
        //     followed: false
        // },
        // {
        //     id: new Date().getTime().toString() + '5',
        //     status: 'not the Creator',
        //     fullName: {name: 'Andrey', surname: 'Kolomiets'},
        //     place: {country: 'Ukraine', city: 'Kerch'},
        //     ava: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/4/49/Groot_Profile%281%29.png/revision/latest?cb=20170505124433&path-prefix=ru',
        //     followed: false
        // },
    ]

type ActionTypes = FollowAT | GetUsers
export const usersReducer = (state: UserType[] = initState, action: ActionTypes): UserType[] => {
    switch (action.type) {
        case 'FOLLOW':
            return state.map(u => u.id === action.payload.id ? {...u, followed: true} : u)
        case 'UNFOLLOW':
            return state.map(u => u.id === action.payload.id ? {...u, followed: false} : u)
        case 'GET-USERS':
            return [...state, ...action.payload.users]
        default:
            return state
    }
}
export const FollowAC = (id: number): FollowAT => ({type: "FOLLOW", payload: {id}})
export const UnFollowAC = (id: number): FollowAT => ({type: "UNFOLLOW", payload: {id}})
export const GetUsersAC = (users: UserType[]): GetUsers => ({type: "GET-USERS", payload: {users}})
