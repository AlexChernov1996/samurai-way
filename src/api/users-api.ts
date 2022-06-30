import axios from "axios";
const instanceUserApi = axios.create({
withCredentials:true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY": "f44de11a-0b43-4d14-9d1c-b85ca62809f9"
    }
})
export const usersApi = {
    getUsers(count:number,currentPage:number) {
      return instanceUserApi.get(`users?count=${count}&page=${currentPage}`,
            {withCredentials: true}
        ).then(res => res.data)
    }
}
