import {
  REQUEST_RESET_PASSWORD_REQUESTING,
  REQUEST_RESET_PASSWORD_SUCCESS,
  REQUEST_RESET_PASSWORD_ERROR,
  REQUEST_RESET_PASSWORD_ERROR_CATCH,
  REQUEST_RESET_PASSWORD_FORM_ERRORS,
  REQUEST_RESET_PASSWORD_EMAIL_VALID,
  REQUEST_RESET_PASSWORD_FORM_VALID,
  REQUEST_RESET_PASSWORD_CLOSE_ERROR_MODAL,
  REQUEST_RESET_PASSWORD_CLOSE_SUCCESS_MODAL,
  REQUEST_RESET_PASSWORD_OPEN_SUCCESS_MODAL
} from './constants'
const initialState = {
  open: false,
  contentSuccessRequestResetPassword: '',
  openSuccess: false,
  isRequestResetPasswordRequest: false,
  isRequestResetPasswordSuccess: false,
  errorsRequestResetPassword: [],
  formErrors: { email: '' },
  emailValid: false,
  formValid: false,
}
function requestResetPassword(state = initialState, action) {
  switch (action.type) {
    case REQUEST_RESET_PASSWORD_REQUESTING:
      return { ...state, isRequestResetPasswordRequest: true, isRequestResetPasswordSuccess: false }
    case REQUEST_RESET_PASSWORD_SUCCESS:
      return { ...state, isRequestResetPasswordSuccess: true, isRequestResetPasswordRequest: false }
    case REQUEST_RESET_PASSWORD_ERROR:
      return { ...state, open: true, isRequestResetPasswordRequest: false, isRequestResetPasswordSuccess: false, errorsRequestResetPassword: action.error.response.data }
    case REQUEST_RESET_PASSWORD_ERROR_CATCH:
      return { ...state, open: true, isRequestResetPasswordRequest: false, isRequestResetPasswordSuccess: false, errorsRequestResetPassword: action.error }
    case REQUEST_RESET_PASSWORD_FORM_ERRORS:
      return { ...state, formErrors: action.data }
    case REQUEST_RESET_PASSWORD_EMAIL_VALID:
      return { ...state, emailValid: action.data }
    case REQUEST_RESET_PASSWORD_FORM_VALID:
      return { ...state, formValid: state.emailValid }
    case REQUEST_RESET_PASSWORD_CLOSE_ERROR_MODAL:
      return { ...state, open: false, errorsRequestResetPassword: [] }
    case REQUEST_RESET_PASSWORD_CLOSE_SUCCESS_MODAL:
      return { ...state, openSuccess: false, contentSuccessRequestResetPassword: '' }
    case REQUEST_RESET_PASSWORD_OPEN_SUCCESS_MODAL:
      return { ...state, openSuccess: true, contentSuccessRequestResetPassword: action.contentSuccess }
    default:
      return state
  }
}
export default requestResetPassword