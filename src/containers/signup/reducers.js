import {
  SIGNUP_REQUESTING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_ERROR_CATCH,
  SIGNUP_CHECKBOX,
  SIGNUP_HIDDEN,
  SIGNUP_RE_HIDDEN,
  SIGNUP_FORM_ERRORS,
  SIGNUP_NAME_VALID,
  SIGNUP_EMAIL_VALID,
  SIGNUP_PASSWORD_VALID,
  SIGNUP_RE_PASSWORD_VALID,
  SIGNUP_FORM_VALID,
  SIGNUP_CLOSE_ERROR_MODAL

} from './constants'
const initialState = {
  open: false,
  isSignUpRequest: false,
  isSignUpSuccess: false,
  errorsSignUp: [],
  data: "",
  hidden: true,
  hiddenRe: true,
  checkAgr: false,
  formErrors: {
    name: '',
    email: '',
    password: '',
    retypePassword: '',
  },
  nameValid: false,
  emailValid: false,
  passwordValid: false,
  retypePasswordValid: false,
  formValid: false
}
function signUpReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_REQUESTING:
      return { ...state, isSignUpRequest: true }
    case SIGNUP_SUCCESS:
      return { ...state, isSignUpSuccess: true, isSignUpRequest: false, data: action.response.data.data }
    case SIGNUP_ERROR_CATCH:
      return { ...state, open: true, isSignUpRequest: false, errorsSignUp: action.error }
    case SIGNUP_ERROR:
      return { ...state, open: true, isSignUpRequest: false, errorsSignUp: action.error.response.data }
    case SIGNUP_CHECKBOX:
      return { ...state, checkAgr: !state.checkAgr }
    case SIGNUP_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case SIGNUP_RE_HIDDEN:
      return { ...state, hiddenRe: !state.hiddenRe }
    case SIGNUP_FORM_ERRORS:
      return { ...state, formErrors: action.data }
    case SIGNUP_NAME_VALID:
      return { ...state, nameValid: action.data }
    case SIGNUP_EMAIL_VALID:
      return { ...state, emailValid: action.data }
    case SIGNUP_PASSWORD_VALID:
      return { ...state, passwordValid: action.data }
    case SIGNUP_RE_PASSWORD_VALID:
      return { ...state, retypePasswordValid: action.data }
    case SIGNUP_FORM_VALID:
      return {
        ...state, formValid:
          (state.emailValid &&
            state.passwordValid &&
            state.retypePasswordValid &&
            state.nameValid)
      }
    case SIGNUP_CLOSE_ERROR_MODAL:
      return { ...state, open: false, errorsSignUp: [] }
    default:
      return state
  }
}
export default signUpReducer