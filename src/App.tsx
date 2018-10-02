import * as React from 'react';
import './App.css';

import { WeatherService } from './services/WeatherService';
import { LandingView } from './views/landing.view';
import { LocationView } from './views/location.view';
import { WeatherView } from './views/weather.view';

interface IState {
    currentView: string;
}

enum Views {
    LANDING = "LandingView",
    LOCATION = "LocationView",
    WEATHER = "WeatherView"
}

export default class App extends React.Component<any, IState> {

    private weatherService: WeatherService;

    constructor(props: any) {
        super(props);
        this.state = {
            currentView: Views.LANDING
        }
        this.weatherService = new WeatherService();
        this.checkBrowserLocation();
    }

    public componentDidMount() {
        this.weatherService.getWeather().subscribe((weatherData) => {
            weatherData.hourlyForecasts.forecastLocation.forecast.map((forecast: IForecast) => {
                // tslint:disable-next-line:no-console
                console.log(forecast.iconName);
            });
        });
    }

    public checkBrowserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                // tslint:disable-next-line:no-console
                console.log(position);
                this.setState({
                    currentView: Views.WEATHER,
                });
            }, (error) => {
                this.setState({
                    currentView: Views.LOCATION,
                });
            });
        } else {
            this.setState({
                currentView: Views.LOCATION,
            });
        }
    }

    public render() {
        return (
            <React.Fragment>
                {
                    this.state.currentView === Views.LOCATION ?
                        <LocationView />
                    : this.state.currentView === Views.WEATHER ?
                        <WeatherView />
                    : <LandingView />
                }
            </React.Fragment>
        );
    }
}
