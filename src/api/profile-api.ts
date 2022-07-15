import axios from "axios";

export const profileApi = {
    getUsersProfile (userId:string){
        return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }
}
