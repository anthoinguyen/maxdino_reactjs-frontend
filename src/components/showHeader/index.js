import React, { Component } from 'react';
import { connect } from 'react-redux'
import Search from "../../containers/search";

export class showHeader extends Component {


    componentWillUnmount () {
        console.log('back');
    }

    render() {
        const {
            signin: {
                isSignInSuccess
            }
        } = this.props;
        let checkHeader = isSignInSuccess === true ? <Search /> : ''
        return (
            <div>{checkHeader}</div>
        )
    }
}

const mapStateToProps = state => {
    return {
        signin: state.signin,
        askPage: state.askPage,
        learnPage: state.learnPage,
        learnDetail: state.learnDetail,
        changePassword: state.changePassword,
    };
};
export default connect(mapStateToProps)(showHeader);
