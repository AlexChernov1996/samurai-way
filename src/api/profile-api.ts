import axios from "axios";
const instanceProfileApi = axios.create({
    withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/profile',
    headers:{
        "API-KEY": "f44de11a-0b43-4d14-9d1c-b85ca62809f9"
    }
})
export const profileApi = {
    getUsersProfile (userId:string){
        return instanceProfileApi.get(`/${userId}`)
    },
    getProfileStatus (userId:string){
        return instanceProfileApi.get(`/status/${userId}`)
    },
    setProfileStatus(status:string) {
        return instanceProfileApi.put(`/status`,{status})
    }
}
