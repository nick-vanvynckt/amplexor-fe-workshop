import axios from "axios";

export class DataService {
    public get(url: string, params?: any) {
        axios.get(url, {
            params,
        })
        .then((response) => {
            // tslint:disable-next-line:no-console
            console.log(response);
        })
        .catch((error) => {
            // tslint:disable-next-line:no-console
            console.log(error);
        })
        .then(() => {
            // always executed
        }); 
    }
}
