import axios from "axios";

export const headerApi = {
    getAuth() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {withCredentials: true})
            .then(res => res.data)
    }

}
