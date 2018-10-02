import * as React from 'react';

interface IState {
    shouldRender: boolean
}

export class LandingView extends React.Component<any, IState> {
    private timeout;

    constructor(props) {
        super(props);
        this.state = {
            shouldRender: false,
        };
    }

    public componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({
                shouldRender: true,
            });
        }, 500);
    }

    public componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    public render() {
        return (
            <React.Fragment>
                {  this.state.shouldRender && 
                    <div className="c-landing">
                        <div className="container-fluid">
                            spinner!
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}