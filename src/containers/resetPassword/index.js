import React, { Component } from 'react';
import { FormErrors } from '../../components/errorForm';
import ModalError from "./../../components/modal/modalError";
import ModalSuccess from "./../../components/modal/modalSuccess";
import Eye from '../../components/eye';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Link } from "react-router-dom";
import './styles.css';

class ResetPassword extends Component {
    submit = (values) => {
        var valuesToken = { token: this.props.match.params.token, ...values }
        this.props.requestResetPassword(valuesToken);
    }
    onClose = () => {
        this.props.closeModalError();
    };
    onCloseSuccess = () => {
        this.props.closeModalSuccess();
        this.props.history.push('/signin');
    };
    toggleShow = () => {
        this.props.showPassword();
    }
    toggleReShow = () => {
        this.props.showRePassword();
    }
    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.validateField(name, value);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.props.formErrors;
        let newPasswordValid = this.props.newPasswordValid;
        let confirmNewPasswordValid = this.props.confirmNewPasswordValid;

        switch (fieldName) {
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
        this.props.getPasswordValid(newPasswordValid);
        this.props.getRePasswordValid(confirmNewPasswordValid);
        this.validateForm();
    }
    validateForm() {
        this.props.getFormValid();
    }
    render() {
        const {
            hidden,
            hiddenRe,
            formErrors,
            formValid,
            contentSuccessResetPassword,
            openSuccess,
            open,
            errorsResetPassword,
            resetPassword: {
                isResetPasswordRequest,
                isResetPasswordSuccess
            }
        } = this.props
        return (
            <div className="container-fluid container-config">
                <ModalError
                    errors={errorsResetPassword}
                    open={open}
                    onClose={this.onClose}
                />
                <ModalSuccess
                    contentSuccess={contentSuccessResetPassword}
                    open={openSuccess}
                    onClose={this.onCloseSuccess}
                />
                <div className="row row-reset-config">
                    <div className="col-sm-4 col-config">
                        <Link to="/">
                            <img className="img-config" src="/images/login-maxdino.png" alt="logo maxdino" />
                        </Link>
                        <form className="form-submit-config" onSubmit={this.props.handleSubmit(this.submit)}>
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
                                {isResetPasswordRequest &&
                                    <div className="loading-post-ask">
                                        Waiting<img className="img-loading-post-ask" src="/images/loading-fff.gif" alt="loading post ask" />
                                    </div>}
                                {!isResetPasswordRequest && !isResetPasswordSuccess && <div>Reset</div>}
                                {!isResetPasswordRequest && isResetPasswordSuccess && <div>Reset</div>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    resetPassword: state.resetPassword,
    hidden: state.resetPassword.hidden,
    hiddenRe: state.resetPassword.hiddenRe,
    formErrors: state.resetPassword.formErrors,
    newPasswordValid: state.resetPassword.newPasswordValid,
    confirmNewPasswordValid: state.resetPassword.confirmNewPasswordValid,
    formValid: state.resetPassword.formValid,
    openSuccess: state.resetPassword.openSuccess,
    contentSuccessResetPassword: state.resetPassword.contentSuccessResetPassword,
    open: state.resetPassword.open,
    errorsResetPassword: state.resetPassword.errorsResetPassword,
});
const mapDispatchToProps = (dispatch) => {
    return {
        requestResetPassword: (obj) => {
            dispatch(actions.requestResetPassword(obj))
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
let connected = connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
export default reduxForm({
    form: 'resetPassword',
})(connected);






