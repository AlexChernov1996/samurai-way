import axios, {AxiosResponse} from "axios";

const instanceApi = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f44de11a-0b43-4d14-9d1c-b85ca62809f9"
    }
})

export const authApi = {
    getAuth() {
        return instanceApi.get(`auth/me`)
            .then(res => res.data)
    },
    logIn(data: LogInRequestType) {
        return instanceApi.post<LogInRequestType, AxiosResponse<ResponseType<{ userId: number }>>>(`auth/login`, data)
    },
    logOut() {
        return instanceApi.delete<ResponseType>(`auth/login`)
    }

}
export type LogInRequestType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean
}
type ResponseType<D = {}> = {
    resultCode: number
    messages: string[]
    data: D
}
