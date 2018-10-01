import { DataService } from "./DataService";

export enum Endpoints {
    WEATHER = "https://weather.api.here.com/weather/1.0/report.json"
}

export class WeatherService {
    private dataService: DataService;
    private readonly appId: string = "KPDSWZUpy6Bew3iXmM8i";
    private readonly appCode: string = "3QO46A76rZfLU0-VtABFNQ";

    constructor() {
        this.dataService = new DataService();
    }

    public getCurrentWeather(location?: string) {
        const params: IWeatherParams = {
            app_code: this.appCode,
            app_id: this.appId,
            jsoncallback: "myCallBack",
            name: location ? location : "Leuven",
            oneobservation: true,
            product: "forecast_hourly",
        }

        this.dataService.get(Endpoints.WEATHER, params);
    }
}