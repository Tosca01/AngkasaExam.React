import Axios, { AxiosInstance } from "axios";

export default class Persiapan {
    endpoint: string = import.meta.env.REACT_APP_API_URL!;

    axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = Axios.create({
            withCredentials: true
        });
    }

    async getUjianAktif() {
        return await this.axiosInstance.get(`${this.endpoint}/persiapan`).then(response => {
            return response.data;
        });
    }
}