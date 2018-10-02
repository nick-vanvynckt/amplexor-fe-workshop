import * as React from 'react';
import './App.css';

import { LandingView } from './views/landing.view';
import { LocationView } from './views/location.view';
import { WeatherView } from './views/weather.view';

import { NavigationComponent } from './components/nav.component';

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
                if (localStorage.getItem('location')) {
                    this.setState({
                        currentView: Views.WEATHER,
                        position: localStorage.getItem('location'),
                    })
                } else {
                    this.setState({
                        currentView: Views.LOCATION,
                    });
                }
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

    public navigateToSearch() {
        this.setState({
            currentView: Views.LOCATION,
        });
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
                        // tslint:disable-next-line:jsx-no-lambda
                        <WeatherView navigateToSearch={() => this.navigateToSearch()} location={this.state.position}/>
                    : <LandingView />
                }
                <NavigationComponent />
            </React.Fragment>
        );
    }
}
