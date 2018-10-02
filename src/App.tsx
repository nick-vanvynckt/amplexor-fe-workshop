import * as React from 'react';
import './App.css';

import { LandingView } from './views/landing.view';
import { LocationView } from './views/location.view';
import { WeatherView } from './views/weather.view';

interface IState {
    currentView: string;
    position: any;
}

enum Views {
    LANDING = "LandingView",
    LOCATION = "LocationView",
    WEATHER = "WeatherView"
}

export default class App extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentView: Views.LANDING,
            position: undefined,
        }
        this.checkBrowserLocation();
    }

    public checkBrowserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    currentView: Views.WEATHER,
                    position
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

    public setLocation(input: string) {
        this.setState({
            currentView: Views.WEATHER,
            position: input,
        })
    }

    public render() {
        return (
            <React.Fragment>
                {
                    this.state.currentView === Views.LOCATION ?
                        // tslint:disable-next-line:jsx-no-lambda
                        <LocationView onSubmit={(input: string) => {
                            return this.setLocation(input);
                        }}/>
                    : this.state.currentView === Views.WEATHER ?
                        <WeatherView location={this.state.position}/>
                    : <LandingView />
                }
            </React.Fragment>
        );
    }
}
