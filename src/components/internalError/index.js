import React, { Component } from 'react';
import { compose } from "redux";
import { connect } from 'react-redux';

import "./styles.css";

export class ErrorPage extends Component {

    reLoadPage = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    }

    render() {
        this.props.signin.isSignInSuccess = false;
        return (
            <div id="internal">
                <div className="internal">
                    <div className="internal-500">
                        <h1>Oops!</h1>
                        <h2>500 - Internal Server Error</h2>
                    </div>
                    <a onClick={e => this.reLoadPage(e)} href="/">try again!</a>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signin: state.signin,
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

export default compose(withConnect)(ErrorPage);
