import React, { Component } from 'react';
import "./styles.css";

export class ErrorPage extends Component {



    render() {
        // const {  } = this.props;
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                        <h2>404 - The Page can't be found</h2>
                    </div>
                    <a href="/">Go TO Homepage</a>
                </div>
            </div>
        );
    }
}

export default ErrorPage;
