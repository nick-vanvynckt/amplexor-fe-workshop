interface IBaseParams {
    app_id: string;
    app_code: string;
} 

interface IWeatherParams extends IBaseParams {
    jsoncallback?: string;
    product: string;
    name?: string;
    latitude?: string;
    longitude?: string;
    oneobservation: boolean;
}