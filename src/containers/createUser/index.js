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

class CreateUser extends Component {
    submit = (values) => {
        var valuesToken = { token: this.props.match.params.token, ...values }
        this.props.requestCreateUser(valuesToken);
    }
    toggleShow = () => {
        this.props.showPassword();
    }
    toggleReShow = () => {
        this.props.showRePassword();
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
    };
    validateField(fieldName, value) {
        let fieldValidationErrors = this.props.formErrors;
        let newPasswordValid = this.props.newPasswordValid;
        let confirmNewPasswordValid = this.props.confirmNewPasswordValid;
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
        this.props.getNameValid(nameValid);
        this.props.getPasswordValid(newPasswordValid);
        this.props.getRePasswordValid(confirmNewPasswordValid);
        this.validateForm();
    }
    validateForm() {
        this.props.getFormValid();
    }
    render() {
        const {
            contentSuccessCreateUser,
            openSuccess,
            open,
            errorsCreateUser,
            hidden,
            hiddenRe,
            formErrors,
            formValid,
            createUser: {
                isCreateUserRequest,
                isCreateUserSuccess
            }
        } = this.props
        return (
            <div className="container-fluid container-config">
                <ModalError
                    errors={errorsCreateUser}
                    open={open}
                    onClose={this.onClose}
                />
                <ModalSuccess
                    contentSuccess={contentSuccessCreateUser}
                    open={openSuccess}
                    onClose={this.onCloseSuccess}
                />
                <div className="row row-reset-config">
                    <div className="col-sm-4 col-config">
                        <Link to="/">
                            <img className="img-config" src="/images/login-maxdino.png" alt="logo maxdino" />
                        </Link>
                        <form className="form-submit-config" onSubmit={this.props.handleSubmit(this.submit)}>
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
                                {isCreateUserRequest &&
                                    <div className="loading-post-ask">
                                        Waiting<img className="img-loading-post-ask" src="/images/loading-fff.gif" alt="loading post ask" />
                                    </div>}
                                {!isCreateUserRequest && !isCreateUserSuccess && <div>Save</div>}
                                {!isCreateUserRequest && isCreateUserSuccess && <div>Save</div>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    createUser: state.createUser,
    hidden: state.createUser.hidden,
    hiddenRe: state.createUser.hiddenRe,
    formErrors: state.createUser.formErrors,
    nameValid: state.createUser.nameValid,
    newPasswordValid: state.createUser.newPasswordValid,
    confirmNewPasswordValid: state.createUser.confirmNewPasswordValid,
    formValid: state.createUser.formValid,
    open: state.createUser.open,
    errorsCreateUser: state.createUser.errorsCreateUser,
    openSuccess: state.createUser.openSuccess,
    contentSuccessCreateUser: state.createUser.contentSuccessCreateUser,
});
const mapDispatchToProps = (dispatch) => {
    return {
        requestCreateUser: (obj) => {
            dispatch(actions.requestCreateUser(obj))
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
let connected = connect(mapStateToProps, mapDispatchToProps)(CreateUser);
export default reduxForm({
    form: 'createUser',
})(connected);






