import Axios, { AxiosInstance } from "axios";

export default class Auth {
    endpoint: string = process.env.REACT_APP_API_URL!;

    axiosInstance:AxiosInstance;

    constructor() {
        this.axiosInstance = Axios.create({
            withCredentials: true
        });
    }
    
    async login(nis: string, password: string) {
        return await this.axiosInstance.get(`${this.endpoint}/csrf-cookie`).then(async () => {
            await this.axiosInstance.postForm(`${this.endpoint}/login`, {nis: nis, password: password})
            .then(response => {
                console.log(response)
            })
        })
    }
}