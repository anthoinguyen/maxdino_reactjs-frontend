import React, { Component } from 'react'
import { FormErrors } from '../../components/errorForm'
import Eye from '../../components/eye'
import { Field, reduxForm } from 'redux-form'
import ModalError from "./../../components/modal/modalError";
import { connect } from 'react-redux'
import * as actions from './actions'
import { Link } from "react-router-dom";
import './styles.css'

class SignUp extends Component {
    componentWillMount() {
        if (localStorage.getItem('jwtToken')) {
            this.props.history.push('/');
        }
        else if (sessionStorage.getItem('jwtToken')) {
            this.props.history.push('/');
        }
    }
    submit = (values) => {
        this.props.requestSignup(values);
    }
    toggleShow = () => {
        this.props.showPassword();
    }
    toggleReShow = () => {
        this.props.showRePassword();
    }
    toggleCheckBox = () => {
        this.props.checkBox();
    }
    onClose = () => {
        this.props.closeModalError();
    };
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
    };
    validateField(fieldName, value) {
        let fieldValidationErrors = this.props.formErrors;
        let emailValid = this.props.emailValid;
        let passwordValid = this.props.passwordValid;
        let retypePasswordValid = this.props.retypePasswordValid;
        let nameValid = this.props.nameValid;

        switch (fieldName) {
            case 'name':
                if (value === '') {
                    fieldValidationErrors.name = 'Required'
                }
                else {
                    nameValid = value.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
                    fieldValidationErrors.name = nameValid ? '' : 'Invalid user name';
                }
                break;
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
            case 'retypePassword':
                if (value === '') {
                    fieldValidationErrors.retypePassword = 'Required';
                }
                else if (value.length < 6) {
                    fieldValidationErrors.retypePassword = 'Invalid rePassword (Minimum 6 characters)';
                }
                else {
                    retypePasswordValid = value.length < 16;
                    fieldValidationErrors.retypePassword = retypePasswordValid ?
                        '' : 'Invalid rePassword (Maximum 16 characters)';
                }
                break;
            default:
                break;
        }
        this.props.getFormErrors(fieldValidationErrors);
        this.props.getNameValid(nameValid);
        this.props.getEmailValid(emailValid);
        this.props.getPasswordValid(passwordValid);
        this.props.getRePasswordValid(retypePasswordValid);
        this.validateForm();
    }
    validateForm() {
        this.props.getFormValid();
    }
    render() {
        const {
            open,
            errorsSignUp,
            hidden,
            hiddenRe,
            formErrors,
            formValid,
            checkAgr,
            signup: {
                isSignUpRequest,
                isSignUpSuccess
            }
        } = this.props
        return (
            <div className="container-fluid container-config">
                <ModalError
                    errors={errorsSignUp}
                    open={open}
                    onClose={this.onClose}
                />
                <div className="row row-signup-config">
                    <div className="col-sm-6 col-6-config">
                        <img className="logo-config" src="/images/login-maxdino.png" alt="logo maxdino" />
                        <form className="form-signup-submit-config" onSubmit={this.props.handleSubmit(this.submit)}>
                            <div className="label-config">Username</div>
                            <div className="form-group">
                                <Field
                                    className="input-config"
                                    name="name"
                                    type="text"
                                    id="name"
                                    placeholder="Jason Lee"
                                    label="Name"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                            </div>
                            <FormErrors formErrors={formErrors.name} />
                            <div className="label-config">Email</div>
                            <div className="form-group">
                                <Field
                                    className="input-config"
                                    name="email"
                                    type="email"
                                    id="email"
                                    placeholder="contact@jasonlee.com"
                                    label="Email"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                            </div>
                            <FormErrors formErrors={formErrors.email} />
                            <div className="label-config">Password</div>
                            <div className="form-group form-eye">
                                <Field
                                    className="input-config"
                                    name="password"
                                    type={hidden ? "password" : "text"}
                                    id="password"
                                    placeholder="•••••••••••••"
                                    label="Password"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                                <div className="div-eye" onClick={this.toggleShow}>
                                    <Eye eye={hidden} ></Eye>
                                </div>
                            </div>
                            <FormErrors formErrors={formErrors.password} />
                            <div className="label-config">Confirm Password</div>
                            <div className="form-group form-eye">
                                <Field
                                    className="input-config"
                                    name="retypePassword"
                                    type={hiddenRe ? "password" : "text"}
                                    id="retypePassword"
                                    placeholder="•••••••••••••"
                                    label="Retype Password"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                                <div className="div-eye" onClick={this.toggleReShow}>
                                    <Eye eye={hiddenRe} ></Eye>
                                </div>
                            </div>
                            <FormErrors formErrors={formErrors.retypePassword} />
                            <div className="checkbox-remember">
                                <input type="checkbox" id="remember" onClick={this.toggleCheckBox} />
                                <label className="label-white" htmlFor="remember">Agree the terms and policy</label>
                            </div>
                            <button className="form-btn-config"
                                disabled={!(formValid && checkAgr)}
                                action="submit">
                                {isSignUpRequest && 
                                <div className="loading-post-ask">
                                    Waiting<img className="img-loading-post-ask" src="/images/loading-fff.gif" alt="loading post ask" />
                                </div>}
                                {!isSignUpRequest && !isSignUpSuccess && <div>Sign Up</div>}
                                {!isSignUpRequest && isSignUpSuccess && <div>Sign Up</div>}
                            </button>
                        </form>
                        <div className="text-bottom-signup">
                            <span className="text-signup-config">Do not have an account?</span>
                            <Link to="/signin" className="link-login-config">Sign In</Link>
                        </div>
                    </div>
                    <div className="col-sm-6 col-6-img-config img-background">
                        <img src="/images/signup-image.png" alt="signup maxdino" />
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        signup: state.signup,
        hidden: state.signup.hidden,
        hiddenRe: state.signup.hiddenRe,
        checkAgr: state.signup.checkAgr,
        formErrors: state.signup.formErrors,
        nameValid: state.signup.nameValid,
        emailValid: state.signup.emailValid,
        passwordValid: state.signup.passwordValid,
        retypePasswordValid: state.signup.retypePasswordValid,
        formValid: state.signup.formValid,
        open: state.signup.open,
        errorsSignUp: state.signup.errorsSignUp,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        requestSignup: (obj) => {
            dispatch(actions.requestSignup(obj))
        },
        checkBox: () => {
            dispatch(actions.checkBox())
        },
        showPassword: () => {
            dispatch(actions.showPassword())
        },
        showRePassword: () => {
            dispatch(actions.showRePassword())
        },
        getFormErrors: (obj) => {
            dispatch(actions.getFormErrors(obj))
        },
        getNameValid: (obj) => {
            dispatch(actions.getNameValid(obj))
        },
        getEmailValid: (obj) => {
            dispatch(actions.getEmailValid(obj))
        },
        getPasswordValid: (obj) => {
            dispatch(actions.getPasswordValid(obj))
        },
        getRePasswordValid: (obj) => {
            dispatch(actions.getRePasswordValid(obj))
        },
        getFormValid: () => {
            dispatch(actions.getFormValid())
        },
        closeModalError: () => {
            dispatch(actions.closeModalError())
        },
    }
};
const connected = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default reduxForm({
    form: 'signup',
})(connected)
