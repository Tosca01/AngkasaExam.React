import Axios, { AxiosInstance } from "axios";

export default class Auth {
    endpoint: string = import.meta.env.REACT_APP_API_URL!;

    axiosInstance:AxiosInstance;

    constructor() {
        this.axiosInstance = Axios.create({
            withCredentials: true
        });
    }
    
    async login(nis: string, password: string) {
        return await this.axiosInstance.get(`${this.endpoint}/csrf-cookie`).then(async () => {
            return await this.axiosInstance.postForm(`${this.endpoint}/login`, 
            {nis: nis, password: password});
        })
    }

    async isLogged() {
        return await this.axiosInstance.get<boolean>(`${this.endpoint}/getuser`).then(response => {
            return response.data;
        })
    }

    async logout() {
        return await this.axiosInstance.post(`${this.endpoint}/auth/logout`).then(response => {
            return response.data;
        })
    }
}