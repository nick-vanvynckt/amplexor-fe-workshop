import { Subject } from "rxjs";
import { DataService } from "./DataService";

export enum Endpoints {
    WEATHER = "https://weather.api.here.com/weather/1.0/report.json"
}

export class WeatherService {

    private dataService: DataService;
    private currentWeather: Subject<IRootObject>;

    private readonly appId: string = "KPDSWZUpy6Bew3iXmM8i";
    private readonly appCode: string = "3QO46A76rZfLU0-VtABFNQ";

    constructor() {
        this.dataService = new DataService();
        this.getCurrentWeather();
        this.currentWeather = new Subject();
    }

    public getWeather(): Subject<IRootObject> {
        return this.currentWeather;
    }

    private getCurrentWeather(location?: string) {
        const params: IWeatherParams = {
            app_code: this.appCode,
            app_id: this.appId,
            name: location ? location : "Lenggries",
            oneobservation: true,
            product: "forecast_hourly",
        }

        this.dataService.get(Endpoints.WEATHER, params).then((response) => {
            const weatherData = response.data as IRootObject;
            this.currentWeather.next(weatherData);
        });
    }
}