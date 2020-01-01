import {
  CREATE_USER_REQUESTING,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR,
  CREATE_USER_ERROR_CATCH,
  CREATE_USER_HIDDEN,
  CREATE_USER_RE_HIDDEN,
  CREATE_USER_FORM_ERRORS,
  CREATE_USER_NAME_VALID,
  CREATE_USER_PASSWORD_VALID,
  CREATE_USER_RE_PASSWORD_VALID,
  CREATE_USER_FORM_VALID,
  CREATE_USER_CLOSE_ERROR_MODAL,
  CREATE_USER_CLOSE_SUCCESS_MODAL,
  CREATE_USER_OPEN_SUCCESS_MODAL
} from './constants'
const initialState = {
  open: false,
  contentSuccessCreateUser: '',
  openSuccess: false,
  isCreateUserRequest: false,
  isCreateUserSuccess: false,
  errorsCreateUser: [],
  hidden: true,
  hiddenRe: true,
  formErrors: {
    name: '',
    newPassword: '',
    confirmNewPassword: ''
  },
  nameValid: false,
  newPasswordValid: false,
  confirmNewPasswordValid: false,
  formValid: false,
}
function createUserReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_REQUESTING:
      return { ...state, isCreateUserRequest: true, isCreateUserSuccess: false }
    case CREATE_USER_SUCCESS:
      return { ...state, isCreateUserSuccess: true, isCreateUserRequest: false }
    case CREATE_USER_ERROR:
      return { ...state, open: true, isCreateUserRequest: false, isCreateUserSuccess: false, errorsCreateUser: action.error.response.data }
    case CREATE_USER_ERROR_CATCH:
      return { ...state, open: true, isCreateUserRequest: false, isCreateUserSuccess: false, errorsCreateUser: action.error }
    case CREATE_USER_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case CREATE_USER_RE_HIDDEN:
      return { ...state, hiddenRe: !state.hiddenRe }
    case CREATE_USER_FORM_ERRORS:
      return { ...state, formErrors: action.data }
    case CREATE_USER_NAME_VALID:
      return { ...state, nameValid: action.data }
    case CREATE_USER_PASSWORD_VALID:
      return { ...state, newPasswordValid: action.data }
    case CREATE_USER_RE_PASSWORD_VALID:
      return { ...state, confirmNewPasswordValid: action.data }
    case CREATE_USER_FORM_VALID:
      return {
        ...state, formValid:
          (state.nameValid &&
            state.newPasswordValid &&
            state.confirmNewPasswordValid)
      }
    case CREATE_USER_CLOSE_ERROR_MODAL:
      return { ...state, open: false, errorsCreateUser: [] }
    case CREATE_USER_CLOSE_SUCCESS_MODAL:
      return { ...state, openSuccess: false, contentSuccessCreateUser: '' }
    case CREATE_USER_OPEN_SUCCESS_MODAL:
      return { ...state, openSuccess: true, contentSuccessCreateUser: action.contentSuccess }
    default:
      return state
  }
}
export default createUserReducer