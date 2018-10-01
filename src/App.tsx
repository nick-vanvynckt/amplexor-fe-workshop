import * as React from 'react';
import './App.scss';

import logo from './logo.svg';
import { WeatherService } from './services/WeatherService';

class App extends React.Component {

    private weatherService: WeatherService;

    constructor(props: any) {
        super(props);
        this.weatherService = new WeatherService();
    }

    public componentDidMount() {
        this.weatherService.getCurrentWeather();
    }

    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
            </div>
        );
    }
}

export default App;
