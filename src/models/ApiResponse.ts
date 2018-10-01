interface IRootObject {
    hourlyForecasts: IHourlyForecasts;
    feedCreation: string;
    metric: boolean;
}

interface IHourlyForecasts {
    forecastLocation: IForecastLocation;
}

interface IForecastLocation {
    forecast: IForecast[];
    country: string;
    state: string;
    city: string;
    latitude: number;
    longitude: number;
    distance: number;
    timezone: number;
}

interface IForecast {
    daylight: string;
    description: string;
    skyInfo: string;
    skyDescription: string;
    temperature: string;
    temperatureDesc: string;
    comfort: string;
    humidity: string;
    dewPoint: string;
    precipitationProbability: string;
    precipitationDesc: string;
    rainFall: string;
    snowFall: string;
    airInfo: string;
    airDescription: string;
    windSpeed: string;
    windDirection: string;
    windDesc: string;
    windDescShort: string;
    visibility: string;
    icon: string;
    iconName: string;
    iconLink: string;
    dayOfWeek: string;
    weekday: string;
    utcTime: string;
    localTime: string;
    localTimeFormat: string;
}