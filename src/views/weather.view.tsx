import * as React from 'react';

export class WeatherView extends React.Component<any, any> {
    public render() {
        return (
            <div className="c-wheatherpane">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-5 col-sm-4 col-md-3 col-lg-3 col-xl-2 align-self-center">
                            <div className="c-temp text-center">
                            <span className="c-temp__val">
                                17º
                            </span>
                            <span className="c-temp__unit">
                                C
                            </span>
                            </div>
                            <div className="c-minmax text-center">
                            min: 6º - max: 20º
                            </div>
                        </div>
                        <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-3  ">
                            <div className="c-icon">
                            {/*?xml version="1.0" encoding="utf-8"?*/}
                            <svg className="c-wheathersvg cloudy" version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 400 400" xmlSpace="preserve">
                                <g className="c-wheathersvg__elem" id="sun">
                                <circle cx={200} cy={200} r="63.5" />
                                <path className="sunline" d="M192.1,62.6c0,18.8,0,37.5,0,56.3c0,10.1,15.7,10.1,15.7,0c0-18.8,0-37.5,0-56.3C207.9,52.5,192.1,52.5,192.1,62.6
                                L192.1,62.6z" />
                                <path className="sunline" d="M192.1,281.1c0,18.8,0,37.5,0,56.3c0,10.1,15.7,10.1,15.7,0c0-18.8,0-37.5,0-56.3C207.9,271,192.1,271,192.1,281.1
                                L192.1,281.1z" />
                                <path className="sunline" d="M337.4,192.1c-18.8,0-37.5,0-56.3,0c-10.1,0-10.1,15.7,0,15.7c18.8,0,37.5,0,56.3,0C347.5,207.9,347.5,192.1,337.4,192.1
                                L337.4,192.1z" />
                                <path className="sunline" d="M118.9,192.1c-18.8,0-37.5,0-56.3,0c-10.1,0-10.1,15.7,0,15.7c18.8,0,37.5,0,56.3,0C129,207.9,129,192.1,118.9,192.1
                                L118.9,192.1z" />
                                <path className="sunline" d="M302.7,291.6c-13.3-13.3-26.5-26.5-39.8-39.8c-7.2-7.2-18.3,3.9-11.1,11.1c13.3,13.3,26.5,26.5,39.8,39.8
                                C298.8,309.9,309.9,298.8,302.7,291.6L302.7,291.6z" />
                                <path className="sunline" d="M148.2,137.1c-13.3-13.3-26.5-26.5-39.8-39.8c-7.2-7.2-18.3,3.9-11.1,11.1c13.3,13.3,26.5,26.5,39.8,39.8
                                C144.2,155.3,155.3,144.2,148.2,137.1L148.2,137.1z" />
                                <path className="sunline" d="M108.4,302.7c13.3-13.3,26.5-26.5,39.8-39.8c7.2-7.2-3.9-18.3-11.1-11.1c-13.3,13.3-26.5,26.5-39.8,39.8
                                C90.1,298.8,101.2,309.9,108.4,302.7L108.4,302.7z" />
                                <path className="sunline" d="M262.9,148.2c13.3-13.3,26.5-26.5,39.8-39.8c7.2-7.2-3.9-18.3-11.1-11.1c-13.3,13.3-26.5,26.5-39.8,39.8
                                C244.7,144.2,255.8,155.3,262.9,148.2L262.9,148.2z" />
                                </g>
                                <path className="c-wheathersvg__elem" id="drop" d="M137.3,320.8c0,13.4-10.8,24.2-24.2,24.2s-24.2-10.8-24.2-24.2c0-13.4,24.2-47.7,24.2-47.7
                        S137.3,307.4,137.3,320.8z" />
                                <path className="c-wheathersvg__elem" id="grease-lightning" d="M136.7,311.6c-6.9,0-13.8,0-20.7,0c4.8-10.9,9.6-21.8,14.4-32.7c4-9.2-9.5-17.2-13.6-7.9
                        c-6.5,14.8-13.1,29.7-19.6,44.5c-2.3,5.3,0.3,11.8,6.8,11.8c6.9,0,13.9,0,20.8,0c-8.3,19.2-16.6,38.4-25,57.5
                        c-4,9.2,9.5,17.2,13.6,7.9c10-23.1,20.1-46.2,30.1-69.4C145.7,318.1,143.1,311.6,136.7,311.6z" />
                                <circle className="c-wheathersvg__elem" id="hail" cx="113.1" cy="335.1" r="7.2" />
                                <g className="c-wheathersvg__elem" id="fogs">
                                <g id="fog3">
                                    <g>
                                    <path d="M92.3,237.7c23.9,0,47.7,0,71.6,0c38,0,76.1,0,114.1,0c8.8,0,17.5,0,26.3,0c7.7,0,7.7-12,0-12c-23.9,0-47.7,0-71.6,0
                        c-38,0-76.1,0-114.1,0c-8.8,0-17.5,0-26.3,0C84.6,225.7,84.6,237.7,92.3,237.7L92.3,237.7z" />
                                    </g>
                                </g>
                                <g id="fog2">
                                    <g>
                                    <path d="M92.3,203c23.9,0,47.7,0,71.6,0c38,0,76.1,0,114.1,0c8.8,0,17.5,0,26.3,0c7.7,0,7.7-12,0-12c-23.9,0-47.7,0-71.6,0
                        c-38,0-76.1,0-114.1,0c-8.8,0-17.5,0-26.3,0C84.6,191,84.6,203,92.3,203L92.3,203z" />
                                    </g>
                                </g>
                                <g id="fog1">
                                    <g>
                                    <path d="M92.3,168.3c23.9,0,47.7,0,71.6,0c38,0,76.1,0,114.1,0c8.8,0,17.5,0,26.3,0c7.7,0,7.7-12,0-12c-23.9,0-47.7,0-71.6,0
                        c-38,0-76.1,0-114.1,0c-8.8,0-17.5,0-26.3,0C84.6,156.3,84.6,168.3,92.3,168.3L92.3,168.3z" />
                                    </g>
                                </g>
                                </g>
                                <path className="c-wheathersvg__elem" id="cloud" d="M290.5,185.1c0,0,0-0.1,0-0.1c0-19.9-16.1-36-36-36c-2.1,0-4.1,0.2-6.1,0.6c-7.3-27.9-32.7-48.5-62.9-48.5
                        c-33.5,0-61.2,25.4-64.6,58.1c-25.8,1.4-46.4,22.7-46.4,48.9c0,27.1,21.9,49,49,49c1,0,2,0,3-0.1c0.7,0,1.3,0.1,2,0.1h160
                        c19.9,0,36-16.1,36-36v0C324.5,201.8,309.4,186.1,290.5,185.1z" />
                                <path className="c-wheathersvg__elem" id="cloud2" d="M290.5,185.1c0,0,0-0.1,0-0.1c0-19.9-16.1-36-36-36c-2.1,0-4.1,0.2-6.1,0.6c-7.3-27.9-32.7-48.5-62.9-48.5
                        c-33.5,0-61.2,25.4-64.6,58.1c-25.8,1.4-46.4,22.7-46.4,48.9c0,27.1,21.9,49,49,49c1,0,2,0,3-0.1c0.7,0,1.3,0.1,2,0.1h160
                        c19.9,0,36-16.1,36-36v0C324.5,201.8,309.4,186.1,290.5,185.1z" />
                                {/* <use class="c-wheathersvg__elem" id="cloud2" xlink:href="#cloud" x="200" y="0" /> */}
                            </svg>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-6 col-sm-6 col-md-5 col-lg-4 col-xl-4 text-center">
                        <div className="c-date">
                        Today at 17:00
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}