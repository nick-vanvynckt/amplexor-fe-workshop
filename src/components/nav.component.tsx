import * as React from "react";

export class NavigationComponent extends React.Component<any, any> {
    public render() {
        return (
            <nav className="navbar bg-dark fixed-bottom justify-content-center">
                <ul className="nav ">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Today at 17:00</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">In 4 hours</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tomorrow</a>
                    </li>
                </ul>
            </nav>
        );
    }
}