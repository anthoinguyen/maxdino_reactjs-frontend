import {
  RESET_PASSWORD_REQUESTING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  RESET_PASSWORD_ERROR_CATCH,
  RESET_PASSWORD_HIDDEN,
  RESET_PASSWORD_RE_HIDDEN,
  RESET_PASSWORD_FORM_ERRORS,
  RESET_PASSWORD_PASSWORD_VALID,
  RESET_PASSWORD_RE_PASSWORD_VALID,
  RESET_PASSWORD_FORM_VALID,
  RESET_PASSWORD_CLOSE_SUCCESS_MODAL,
  RESET_PASSWORD_OPEN_SUCCESS_MODAL,
  RESET_PASSWORD_CLOSE_ERROR_MODAL
} from './constants'
const initialState = {
  open: false,
  contentSuccessResetPassword: '',
  openSuccess: false,
  isResetPasswordRequest: false,
  isResetPasswordSuccess: false,
  errorsResetPassword: [],
  hidden: true,
  hiddenRe: true,
  formErrors: { newPassword: '', confirmNewPassword: '' },
  newPasswordValid: false,
  confirmNewPasswordValid: false,
  formValid: false,
}
function resetPasswordReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_PASSWORD_REQUESTING:
      return { ...state, isResetPasswordRequest: true, isResetPasswordSuccess: false }
    case RESET_PASSWORD_SUCCESS:
      return { ...state, isResetPasswordSuccess: true }
    case RESET_PASSWORD_ERROR:
      return { ...state, open: true, isResetPasswordRequest: false, isResetPasswordSuccess: false, errorsResetPassword: action.error.response.data }
    case RESET_PASSWORD_ERROR_CATCH:
      return { ...state, open: true, isResetPasswordRequest: false, isResetPasswordSuccess: false, errorsResetPassword: action.error }
    case RESET_PASSWORD_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case RESET_PASSWORD_RE_HIDDEN:
      return { ...state, hiddenRe: !state.hiddenRe }
    case RESET_PASSWORD_FORM_ERRORS:
      return { ...state, formErrors: action.data }
    case RESET_PASSWORD_PASSWORD_VALID:
      return { ...state, newPasswordValid: action.data }
    case RESET_PASSWORD_RE_PASSWORD_VALID:
      return { ...state, confirmNewPasswordValid: action.data }
    case RESET_PASSWORD_FORM_VALID:
      return { ...state, formValid: (state.newPasswordValid && state.confirmNewPasswordValid) }
    case RESET_PASSWORD_CLOSE_SUCCESS_MODAL:
      return { ...state, openSuccess: false, contentSuccessResetPassword: '' }
    case RESET_PASSWORD_OPEN_SUCCESS_MODAL:
      return { ...state, openSuccess: true, contentSuccessResetPassword: action.contentSuccess }
      case RESET_PASSWORD_CLOSE_ERROR_MODAL:
          return { ...state, open: false, errorsResetPassword: [] }
    default:
      return state
  }
}
export default resetPasswordReducer