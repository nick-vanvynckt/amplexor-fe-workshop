import * as React from 'react';

export class LocationView extends React.Component<any, any> {
    public render() {
        return (
            <div className="c-locationentry">
                <div className="container-fluid">
                    <form className="needs-validation" noValidate={true}>
                        <div className="row justify-content-center">
                            <div className="col-9 col-sm-5 col-md-4 col-lg-3 col-xl-2 ">
                                <div className="mb-3">
                                    <label htmlFor="customlocation">City</label>
                                    <input type="text" className="form-control" id="customlocation" placeholder="Enter your city" required={true} />
                                    <div className="invalid-feedback">
                                        City is required.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="rememberme" />
                                        <label className="custom-control-label" htmlFor="rememberme">Remember location</label>
                                    </div>
                                </div>
                                <div className="mb-3"> 
                                    <button className="btn btn-primary btn-block" type="submit">Continue</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}