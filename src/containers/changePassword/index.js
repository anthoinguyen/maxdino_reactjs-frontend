import React, { Component } from 'react';
import { FormErrors } from '../../components/errorForm';
import Eye from '../../components/eye';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Link } from "react-router-dom";
import ModalError from "./../../components/modal/modalError";
import ModalSuccess from "./../../components/modal/modalSuccess";
import './styles.css';

class ChangePassword extends Component {
    componentWillMount() {
        if (!localStorage.getItem("jwtToken")) {
            if (!window.sessionStorage.getItem('jwtToken')) {
                this.props.history.push("/signin");
            }
        }
        this.props.stateChangePassword();
    }
    submit = (values) => {
        this.props.requestChangePassword(values);
    }
    toggleShowCur = () => {
        this.props.showCurPassword();
    }
    toggleShow = () => {
        this.props.showPassword();
    }
    toggleShowRe = () => {
        this.props.showRePassword();
    }
    onClose = () => {
        this.props.closeModalError();
    };
    onCloseSuccess = () => {
        this.props.closeModalSuccess();
        this.props.history.push('/');
    };
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.props.formErrors;
        let currentPasswordValid = this.props.currentPasswordValid;
        let newPasswordValid = this.props.newPasswordValid;
        let confirmNewPasswordValid = this.props.confirmNewPasswordValid;

        switch (fieldName) {
            case 'currentPassword':
                if (value === '') {
                    fieldValidationErrors.currentPassword = 'Required';
                }
                else if (value.length < 6) {
                    fieldValidationErrors.currentPassword = 'Invalid password (Minimum 6 characters)';
                }
                else {
                    currentPasswordValid = value.length <= 16;
                    fieldValidationErrors.currentPassword = currentPasswordValid ?
                        '' : 'Invalid password (Maximum 16 characters)';
                }
                break;
            case 'newPassword':
                if (value === '') {
                    fieldValidationErrors.newPassword = 'Required';
                }
                else if (value.length < 6) {
                    fieldValidationErrors.newPassword = 'Invalid password (Minimum 6 characters)';
                }
                else {
                    newPasswordValid = value.length <= 16;
                    fieldValidationErrors.newPassword = newPasswordValid ?
                        '' : 'Invalid password (Maximum 16 characters)';
                }
                break;
            case 'confirmNewPassword':
                if (value === '') {
                    fieldValidationErrors.confirmNewPassword = 'Required';
                }
                else if (value.length < 6) {
                    fieldValidationErrors.confirmNewPassword = 'Invalid password (Minimum 6 characters)';
                }
                else {
                    confirmNewPasswordValid = value.length <= 16;
                    fieldValidationErrors.confirmNewPassword = confirmNewPasswordValid ?
                        '' : 'Invalid password (Maximum 16 characters)';
                }
                break;
            default:
                break;
        }
        this.props.getFormErrors(fieldValidationErrors);
        this.props.getCurPasswordValid(currentPasswordValid);
        this.props.getPasswordValid(newPasswordValid);
        this.props.getRePasswordValid(confirmNewPasswordValid);
        this.validateForm();
    }
    validateForm() {
        this.props.getFormValid();
    }
    render() {
        const {
            contentSuccessChangePassword,
            openSuccess,
            open,
            errorsChangePassword,
            hiddenCur,
            hidden,
            hiddenRe,
            formErrors,
            formValid,
            changePassword: {
                isChangePasswordRequest,
                isChangePasswordSuccess
            }
        } = this.props
        this.props.signin.isSignInSuccess = false;
        return (
            <div className="container-fluid container-config">
                <ModalError
                    errors={errorsChangePassword}
                    open={open}
                    onClose={this.onClose}
                />
                <ModalSuccess
                    contentSuccess={contentSuccessChangePassword}
                    open={openSuccess}
                    onClose={this.onCloseSuccess}
                />
                <div className="row row-change-config">
                    <div className="col-sm-4 col-config">
                        <Link to="/">
                            <img className="img-config" src="/images/login-maxdino.png" alt="logo maxdino" />
                        </Link>
                        <form className="form-submit-config" onSubmit={this.props.handleSubmit(this.submit)}>
                            <div className="label-config">Current Password</div>
                            <div className="form-group form-eye">
                                <Field
                                    className="input-config"
                                    name="currentPassword"
                                    type={hiddenCur ? "password" : "text"}
                                    placeholder="•••••••••••••"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                                <div className="div-eye" onClick={this.toggleShowCur}>
                                    <Eye eye={hiddenCur} ></Eye>
                                </div>
                            </div>
                            <FormErrors formErrors={formErrors.currentPassword} />

                            <div className="label-config">New Password</div>
                            <div className="form-group form-eye">
                                <Field
                                    className="input-config"
                                    name="newPassword"
                                    type={hidden ? "password" : "text"}
                                    placeholder="•••••••••••••"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                                <div className="div-eye" onClick={this.toggleShow}>
                                    <Eye eye={hidden} ></Eye>
                                </div>
                            </div>
                            <FormErrors formErrors={formErrors.newPassword} />

                            <div className="label-config">Confirm Password</div>
                            <div className="form-group form-eye">
                                <Field
                                    className="input-config"
                                    name="confirmNewPassword"
                                    type={hiddenRe ? "password" : "text"}
                                    placeholder="•••••••••••••"
                                    component="input"
                                    onChange={this.handleUserInput}
                                />
                                <div className="div-eye" onClick={this.toggleShowRe}>
                                    <Eye eye={hiddenRe} ></Eye>
                                </div>
                            </div>
                            <FormErrors formErrors={formErrors.confirmNewPassword} />
                            <button className="form-btn-config"
                                disabled={!formValid}
                                action="submit">
                                {isChangePasswordRequest &&
                                    <div className="loading-post-ask">
                                        Waiting<img className="img-loading-post-ask" src="/images/loading-fff.gif" alt="loading post ask" />
                                    </div>}
                                {!isChangePasswordRequest && !isChangePasswordSuccess && <div>Change</div>}
                                {!isChangePasswordRequest && isChangePasswordSuccess && <div>Change</div>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    changePassword: state.changePassword,
    signin: state.signin,
    hiddenCur: state.changePassword.hiddenCur,
    hidden: state.changePassword.hidden,
    hiddenRe: state.changePassword.hiddenRe,
    formErrors: state.changePassword.formErrors,
    currentPasswordValid: state.changePassword.currentPasswordValid,
    newPasswordValid: state.changePassword.newPasswordValid,
    confirmNewPasswordValid: state.changePassword.confirmNewPasswordValid,
    formValid: state.changePassword.formValid,
    open: state.changePassword.open,
    errorsChangePassword: state.changePassword.errorsChangePassword,
    openSuccess: state.changePassword.openSuccess,
    contentSuccessChangePassword: state.changePassword.contentSuccessChangePassword,
});
const mapDispatchToProps = (dispatch) => {
    return {
        requestChangePassword: (obj) => {
            dispatch(actions.requestChangePassword(obj))
        },
        stateChangePassword: () => {
            dispatch(actions.stateChangePassword())
        },
        showCurPassword: () => {
            dispatch(actions.showCurPassword())
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
        getCurPasswordValid: (obj) => {
            dispatch(actions.getCurPasswordValid(obj))
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
        closeModalSuccess: () => {
            dispatch(actions.closeModalSuccess())
        },
    }
};
let connected = connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
export default reduxForm({
    form: 'changePassword',
})(connected);






