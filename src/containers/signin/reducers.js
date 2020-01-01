import {
  PUSH_SIGNIN,
  SIGNIN_REQUESTING,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNIN_ERROR_CATCH,
  SIGNIN_INITIAL_STATE,
  SIGNIN_REMEMBER,
  SIGNIN_HIDDEN,
  SIGNIN_FORM_ERRORS,
  SIGNIN_EMAIL_VALID,
  SIGNIN_PASSWORD_VALID,
  SIGNIN_FORM_VALID,
  SIGNIN_CLOSE_ERROR_MODAL
} from './constants'
const initialState = {
  open: false,
  isSignInRequest: false,
  isSignInSuccess: false,
  errorsSignIn: [],
  dataUserSignIn: [],
  hidden: true,
  RememberCheckBox: false,
  formErrors: { email: '', password: '' },
  emailValid: false,
  passwordValid: false,
  formValid: false,
}
function signinReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_SIGNIN:
      return { ...initialState }
    case SIGNIN_REQUESTING:
      return { ...state, isSignInRequest: true, isSignInSuccess: false }
    case SIGNIN_SUCCESS:
      return { ...state, isSignInSuccess: true, dataUserSignIn: action.response.data.data.user }
    case SIGNIN_ERROR:
      return { ...state, open: true, isSignInRequest: false, isSignInSuccess: false, errorsSignIn: action.error.response.data }
    case SIGNIN_ERROR_CATCH:
      return { ...state, open: true, isSignInRequest: false, isSignInSuccess: false, errorsSignIn: action.error }
    case SIGNIN_INITIAL_STATE:
      return { ...state, isSignInRequest: false, isSignInSuccess: false, errorsSignIn: [] }
    case SIGNIN_REMEMBER:
      return { ...state, RememberCheckBox: !state.RememberCheckBox }
    case SIGNIN_HIDDEN:
      return { ...state, hidden: !state.hidden }
    case SIGNIN_FORM_ERRORS:
      return { ...state, formErrors: action.data }
    case SIGNIN_EMAIL_VALID:
      return { ...state, emailValid: action.data }
    case SIGNIN_PASSWORD_VALID:
      return { ...state, passwordValid: action.data }
    case SIGNIN_FORM_VALID:
      return { ...state, formValid: (state.emailValid && state.passwordValid) }
    case SIGNIN_CLOSE_ERROR_MODAL:
      return { ...state, open: false, errorsSignIn: [] }
    default:
      return state
  }
}
export default signinReducer