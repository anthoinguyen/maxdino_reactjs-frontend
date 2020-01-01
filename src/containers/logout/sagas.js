import { call, takeLatest, put } from "redux-saga/effects";
import {
  logoutSuccess,
  logoutError,
} from "./actions";
import {
  PUSH_SIGNIN
} from '../signin/constants';
import * as constNewFeed from "./constants";
import * as api from "./../../constants/endpoint";
import * as host from "./../../constants/host";
import axios from "axios";

const apiLogout = async () => {
    let token = await localStorage.getItem("jwtToken");
    if (!token) token = await sessionStorage.getItem("jwtToken");
    let result = await axios({
      method: "POST",
      url: `${host.apiUrl}${api.apiLogout}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
    });
    return result;
  };

function* logout() {
    try {
      const resp = yield call(apiLogout);
      const { data, status } = resp;
      if (status === 200) {
        yield put({ type: PUSH_SIGNIN });
        yield put(logoutSuccess(data.data));
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        yield put(logoutError(error.response.data));
      } else {
        yield put(logoutError(error));
      }
    }
  }

function* logoutWatcher() {
    yield takeLatest(constNewFeed.LOGOUT, logout);
}

export default logoutWatcher();