import React, { Component } from 'react';
import { FormErrors } from '../../components/errorForm';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Link } from "react-router-dom";
import ModalError from "./../../components/modal/modalError";
import ModalSuccess from "./../../components/modal/modalSuccess";
import './styles.css';

class RequestResetPassword extends Component {
    componentWillMount() {
        if (localStorage.getItem('jwtToken')) {
            this.props.history.push('/');
        }
        else if (window.sessionStorage.getItem('jwtToken')) {
            this.props.history.push('/');
        }
    }
    submit = (values) => {
        this.props.requestRequestResetPassword(values);
    }

    onClose = () => {
        this.props.closeModalError();
    };

    onCloseSuccess = () => {
        this.props.closeModalSuccess();
        this.props.history.push('/signin');
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.props.formErrors;
        let emailValid = this.props.emailValid;

        switch (fieldName) {
            case 'email':
                if (value === '') {
                    fieldValidationErrors.email = 'Required'
                }
                else {
                    emailValid = value.match(/^[a-z][a-z0-9_\\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/);
                    fieldValidationErrors.email = emailValid ? '' : 'Invalid email';
                }
                break;
            default:
                break;
        }
        this.props.getFormErrors(fieldValidationErrors);
        this.props.getEmailValid(emailValid);
        this.validateForm();
    }
    validateForm() {
        this.props.getFormValid();
    }
    render() {
        const {
            open,
            errorsRequestResetPassword,
            contentSuccessRequestResetPassword,
            openSuccess,
            formErrors,
            formValid,
            requestResetPassword: {
                isRequestResetPasswordRequest,
                isRequestResetPasswordSuccess
            }
        } = this.props
        return (
            <div className="container-fluid container-config">
                <ModalError
                    errors={errorsRequestResetPassword}
                    open={open}
                    onClose={this.onClose}
                />
                <ModalSuccess
                    contentSuccess={contentSuccessRequestResetPassword}
                    open={openSuccess}
                    onClose={this.onCloseSuccess}
                />
                <div className="row row-request-config">
                    <div className="col-sm-4 col-config">
                        <Link to="/">
                            <img className="img-config" src="/images/login-maxdino.png" alt="logo maxdino" />
                        </Link>
                        <form className="form-submit-config" onSubmit={this.props.handleSubmit(this.submit)}>
                            <div className="label-config">Email</div>
                            <div className="form-group">
                                <Field
                                    className="input-config"
                                    name="email"
                                    type="email"
                                    placeholder="Your email here"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                            </div>
                            <FormErrors formErrors={formErrors.email} />
                            <button className="form-btn-config"
                                disabled={!formValid}
                                action="submit">
                                {isRequestResetPasswordRequest &&
                                    <div className="loading-post-ask">
                                        Waiting<img className="img-loading-post-ask" src="/images/loading-fff.gif" alt="loading post ask" />
                                    </div>}
                                {!isRequestResetPasswordRequest && !isRequestResetPasswordSuccess && <div>Send Email</div>}
                                {!isRequestResetPasswordRequest && isRequestResetPasswordSuccess && <div>Send Email</div>}
                            </button>
                        </form>
                        <div className="text-bottom">
                            <span className="text-signup-config">Do not have an account?</span>
                            <Link to="/signup" className="link-signup-config">Create an account</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    requestResetPassword: state.requestResetPassword,
    formErrors: state.requestResetPassword.formErrors,
    emailValid: state.requestResetPassword.emailValid,
    formValid: state.requestResetPassword.formValid,
    open: state.requestResetPassword.open,
    errorsRequestResetPassword: state.requestResetPassword.errorsRequestResetPassword,
    openSuccess: state.requestResetPassword.openSuccess,
    contentSuccessRequestResetPassword: state.requestResetPassword.contentSuccessRequestResetPassword,
});
const mapDispatchToProps = (dispatch) => {
    return {
        requestRequestResetPassword: (obj) => {
            dispatch(actions.requestRequestResetPassword(obj))
        },
        getFormErrors: (obj) => {
            dispatch(actions.getFormErrors(obj))
        },
        getEmailValid: (obj) => {
            dispatch(actions.getEmailValid(obj))
        },
        getFormValid: () => {
            dispatch(actions.getFormValid())
        },
        closeModalError: () => {
            dispatch(actions.closeModalError())
        },
        closeModalSuccess: () => {
            dispatch(actions.closeModalSuccess())
        },
    }
};
let connected = connect(mapStateToProps, mapDispatchToProps)(RequestResetPassword);
export default reduxForm({
    form: 'requestResetPassword',
})(connected);






