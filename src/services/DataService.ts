import axios from "axios";

export class DataService {
    public get(url: string, params?: any) {
        return axios.get(url, {
            params,
        })
            .catch((error) => {
                throw new Error(error);
            });
    }
}
