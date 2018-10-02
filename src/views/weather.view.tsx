import * as React from 'react';
import { SVGComponent } from '../components/svg.sfc.component';
import { WeatherService } from '../services/WeatherService';

interface IProps {
    location: string;
}

interface IState {
    currentWeather: IForecast;
    shouldRender: boolean;
}
export class WeatherView extends React.Component<IProps, IState> {

    private weatherService: WeatherService;

    constructor(props: IProps) {
        super(props);

        this.weatherService = new WeatherService();
        this.weatherService.getCurrentWeather(props.location);

        this.state = {
            currentWeather: {
                airDescription: "",
                airInfo: "",
                comfort: "",
                dayOfWeek: "",
                daylight: "",
                description: "",
                dewPoint: "",
                humidity: "",
                icon: "",
                iconLink: "",
                iconName: "",
                localTime: "",
                localTimeFormat: "",
                precipitationDesc: "",
                precipitationProbability: "",
                rainFall: "",
                skyDescription: "",
                skyInfo: "",
                snowFall: "",
                temperature: "",
                temperatureDesc: "",
                utcTime: "",
                visibility: "",
                weekday: "",
                windDesc: "",
                windDescShort: "",
                windDirection: "",
                windSpeed: "",
            },
            shouldRender: false,
        };
    }

    public componentDidMount() {
        this.weatherService.getWeather().subscribe((weatherData) => {
            weatherData.hourlyForecasts.forecastLocation.forecast.map((forecast: IForecast) => {
                const forecastDate = new Date(forecast.utcTime);
                const now = new Date();

                if (forecastDate.getDay() === now.getDay() && forecastDate.getHours() === now.getHours()) {
                    this.setState({
                        currentWeather: forecast,
                        shouldRender: true,
                    })
                }
            });
        });
    }

    public render() {
        const date = new Date(this.state.currentWeather.utcTime);
        return (
            <React.Fragment>
                {
                    this.state.shouldRender &&
                    <div className="c-wheatherpane">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-5 col-sm-4 col-md-3 col-lg-3 col-xl-2 align-self-center">
                                    <div className="c-temp text-center">
                                        <span className="c-temp__val">
                                            { Math.round(parseFloat(this.state.currentWeather.temperature)) }º
                                        </span>
                                        <span className="c-temp__unit">
                                            C
                                        </span>
                                    </div>
                                    <div className="c-minmax text-center">
                                        Iets anders
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3  ">
                                    <SVGComponent weatherClassName={"sunny"} />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4 text-center">
                                    <div className="c-date">
                                        Today at {date.getHours() + ":" + ( date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes() )}
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}