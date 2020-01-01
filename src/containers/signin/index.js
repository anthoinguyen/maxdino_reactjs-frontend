import React, { Component } from 'react';
import { FormErrors } from '../../components/errorForm';
import ModalError from "./../../components/modal/modalError";
import Eye from '../../components/eye';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Link } from "react-router-dom";
import './styles.css';

class Signin extends Component {
    componentWillMount() {
        if (localStorage.getItem('jwtToken')) {
            this.props.history.push('/');
        }
        else if (window.sessionStorage.getItem('jwtToken')) {
            this.props.history.push('/');
        }
    }
    submit = (values) => {
        values.RememberCheckBox = this.props.RememberCheckBox;
        this.props.requestSignin(values);
    }
    toggleShow = () => {
        this.props.showPassword();
    }
    toggleCheckBox = () => {
        this.props.remember();
    }
    onClose = () => {
        this.props.closeModalError();
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.props.formErrors;
        let emailValid = this.props.emailValid;
        let passwordValid = this.props.passwordValid;

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
            case 'password':
                if (value === '') {
                    fieldValidationErrors.password = 'Required';
                }
                else if (value.length < 6) {
                    fieldValidationErrors.password = 'Invalid password (Minimum 6 characters)';
                }
                else {
                    passwordValid = value.length <= 16;
                    fieldValidationErrors.password = passwordValid ?
                        '' : 'Invalid password (Maximum 16 characters)';
                }
                break;
            default:
                break;
        }
        this.props.getFormErrors(fieldValidationErrors);
        this.props.getEmailValid(emailValid);
        this.props.getPasswordValid(passwordValid);
        this.validateForm();
    }
    validateForm() {
        this.props.getFormValid();
    }
    render() {
        const {
            open,
            errorsSignIn,
            hidden,
            formErrors,
            formValid,
            signin: {
                isSignInRequest,
                isSignInSuccess
            }
        } = this.props
        return (
            <div className="container-fluid container-config">
                <ModalError
                    errors={errorsSignIn}
                    open={open}
                    onClose={this.onClose}
                />
                <div className="row row-config">
                    <div className="col-sm-4 col-config">
                        <img className="img-config" src="/images/login-maxdino.png" alt="logo maxdino" />
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
                            <div className="text-form">
                                <div className="label-config">Password</div>
                                <Link to="/request-reset-password" className="forgot-config">Forgot Password?</Link>
                            </div>
                            <div className="form-group form-eye">
                                <Field
                                    className="input-config"
                                    name="password"
                                    type={hidden ? "password" : "text"}
                                    placeholder="•••••••••••••"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                                <div className="div-eye" onClick={this.toggleShow}>
                                    <Eye eye={hidden} ></Eye>
                                </div>
                            </div>
                            <FormErrors formErrors={formErrors.password} />
                            <div className="checkbox-remember">
                                <input type="checkbox" id="remember" onClick={this.toggleCheckBox} />
                                <label className="label-white" htmlFor="remember">Remember me</label>
                            </div>
                            <button className="form-btn-config"
                                disabled={!formValid}
                                action="submit">
                                {isSignInRequest &&
                                    <div className="loading-post-ask">
                                        Waiting<img className="img-loading-post-ask" src="/images/loading-fff.gif" alt="loading post ask" />
                                    </div>}
                                {!isSignInRequest && !isSignInSuccess && <div>Sign In</div>}
                                {!isSignInRequest && isSignInSuccess && <div>Sign In</div>}
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
    signin: state.signin,
    logout: state.logout,
    hidden: state.signin.hidden,
    RememberCheckBox: state.signin.RememberCheckBox,
    formErrors: state.signin.formErrors,
    emailValid: state.signin.emailValid,
    passwordValid: state.signin.passwordValid,
    formValid: state.signin.formValid,
    open: state.signin.open,
    errorsSignIn: state.signin.errorsSignIn,
});
const mapDispatchToProps = (dispatch) => {
    return {
        requestSignin: (obj) => {
            dispatch(actions.requestSignin(obj))
        },
        remember: () => {
            dispatch(actions.remember())
        },
        showPassword: () => {
            dispatch(actions.showPassword())
        },
        getFormErrors: (obj) => {
            dispatch(actions.getFormErrors(obj))
        },
        getEmailValid: (obj) => {
            dispatch(actions.getEmailValid(obj))
        },
        getPasswordValid: (obj) => {
            dispatch(actions.getPasswordValid(obj))
        },
        getFormValid: () => {
            dispatch(actions.getFormValid())
        },
        closeModalError: () => {
            dispatch(actions.closeModalError())
        },
    }
};
let connected = connect(mapStateToProps, mapDispatchToProps)(Signin);
export default reduxForm({
    form: 'signin',
})(connected);