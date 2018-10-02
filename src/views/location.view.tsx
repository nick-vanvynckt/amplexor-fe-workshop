import * as React from 'react';

interface IProps {
    onSubmit: (input: string) => void;
}

interface IState {
    checked: boolean;
    input: string;
}

export class LocationView extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            input: "",
        }
    }

    public submit() {
         this.props.onSubmit(this.state.input);
         this.storeLocation();
    }

    public updateInput(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            input: e.currentTarget.value,
        });
    }

    public updateRemember(e: React.FormEvent<HTMLInputElement>) {
        this.setState({
            checked: e.currentTarget.checked,
        })
    }
    
    public storeLocation() {
        if (this.state.input !== "" && this.state.checked) {
            localStorage.setItem('location', this.state.input);
        }
    }

    public render() {
        return (
            <div className="c-locationentry">
                <div className="container-fluid">
                    <form className="needs-validation" noValidate={true}>
                        <div className="row justify-content-center">
                            <div className="col-9 col-sm-5 col-md-4 col-lg-3 col-xl-2 ">
                                <div className="mb-3">
                                    <label htmlFor="customlocation">City</label>
                                    {/* tslint:disable-next-line:jsx-no-lambda */}
                                    <input type="text" className="form-control" id="customlocation" placeholder="Enter your city" required={true} value={this.state.input} onChange={(e: React.FormEvent<HTMLInputElement>) => {this.updateInput(e)}}/>
                                    <div className="invalid-feedback">
                                        City is required.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="custom-control custom-checkbox">
                                        {/* tslint:disable-next-line:jsx-no-lambda */}
                                        <input type="checkbox" className="custom-control-input" id="rememberme" checked={this.state.checked} onChange={(e: React.FormEvent<HTMLInputElement>) => {this.updateRemember(e)}}/>
                                        <label className="custom-control-label" htmlFor="rememberme">Remember location</label>
                                    </div>
                                </div>
                                <div className="mb-3"> 
                                    {/* tslint:disable-next-line:jsx-no-lambda */}
                                    <button onClick={() => this.submit()} className="btn btn-primary btn-block" type="submit">Continue</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}