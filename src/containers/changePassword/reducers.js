import {
  CHANGE_PASSWORD_REQUESTING,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_ERROR_CATCH,
  CHANGE_PASSWORD_STATE,
  CHANGE_PASSWORD_CUR_HIDDEN,
  CHANGE_PASSWORD_HIDDEN,
  CHANGE_PASSWORD_RE_HIDDEN,
  CHANGE_PASSWORD_FORM_ERRORS,
  CHANGE_PASSWORD_CUR_PASSWORD_VALID,
  CHANGE_PASSWORD_PASSWORD_VALID,
  CHANGE_PASSWORD_RE_PASSWORD_VALID,
  CHANGE_PASSWORD_FORM_VALID,
  CHANGE_PASSWORD_CLOSE_ERROR_MODAL,
  CHANGE_PASSWORD_CLOSE_SUCCESS_MODAL,
  CHANGE_PASSWORD_OPEN_SUCCESS_MODAL
} from './constants'
const initialState = {
  open: false,
  contentSuccessChangePassword: '',
  openSuccess: false,
  isChangePasswordRequest: false,
  isChangePasswordSuccess: false,
  errorsChangePassword: [],
  hiddenCur: true,
  hidden: true,
  hiddenRe: true,
  formErrors: { currentPassword: '', newPassword: '', confirmNewPassword: '' },
  currentPasswordValid: false,
  newPasswordValid: false,
  confirmNewPasswordValid: false,
  formValid: false,
}
function changePasswordReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PASSWORD_STATE:
      return { ...state }
    case CHANGE_PASSWORD_REQUESTING:
      return { ...state, isChangePasswordRequest: true, isChangePasswordSuccess: false }
    case CHANGE_PASSWORD_SUCCESS:
      return { ...state, isChangePasswordRequest: false, isChangePasswordSuccess: true }
    case CHANGE_PASSWORD_ERROR:
      return { ...state, open: true, isChangePasswordRequest: false, isChangePasswordSuccess: false, errorsChangePassword: action.error.response.data }
    case CHANGE_PASSWORD_ERROR_CATCH:
      return { ...state, open: true, isChangePasswordRequest: false, isChangePasswordSuccess: false, errorsChangePassword: action.error }
    case CHANGE_PASSWORD_CUR_HIDDEN:
      return { ...state, hiddenCur: !state.hiddenCur }
    case CHANGE_PASSWORD_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case CHANGE_PASSWORD_RE_HIDDEN:
      return { ...state, hiddenRe: !state.hiddenRe }
    case CHANGE_PASSWORD_FORM_ERRORS:
      return { ...state, formErrors: action.data }
    case CHANGE_PASSWORD_CUR_PASSWORD_VALID:
      return { ...state, currentPasswordValid: action.data }
    case CHANGE_PASSWORD_PASSWORD_VALID:
      return { ...state, newPasswordValid: action.data }
    case CHANGE_PASSWORD_RE_PASSWORD_VALID:
      return { ...state, confirmNewPasswordValid: action.data }
    case CHANGE_PASSWORD_FORM_VALID:
      return {
        ...state, formValid:
          (state.currentPasswordValid &&
            state.newPasswordValid &&
            state.confirmNewPasswordValid)
      }
    case CHANGE_PASSWORD_CLOSE_ERROR_MODAL:
      return { ...state, open: false, errorsChangePassword: [] }
    case CHANGE_PASSWORD_CLOSE_SUCCESS_MODAL:
      return { ...state, openSuccess: false, contentSuccessChangePassword: '' }
    case CHANGE_PASSWORD_OPEN_SUCCESS_MODAL:
      return { ...state, openSuccess: true, contentSuccessChangePassword: action.contentSuccess }
    default:
      return state
  }
}
export default changePasswordReducer