import { call, takeLatest, put, select } from "redux-saga/effects";
import {
  getNewFeedSuccess,
  getNewFeedError,
  argeeDeleteSuccess,
  
  postStatusSuccess,
  postStatusError,

  getSectionNewsSuccess,
  getSectionNewsError,

  getVideoSuccess,
  getVideoError,

  getConnectionSuccess,
  getConnectionError,

  likeAskSuccess,
  likeAskError,

  addCommentSuccess,
  addCommentError,
  getCommentSuccess,
  getCommentError,

  getProfileSuccess,
  getProfileError,
  closeModalError
} from "./actions";
import {
  PUSH_SIGNIN
} from '../signin/constants';
import * as constNewFeed from "./constants";
import * as api from "./../../constants/endpoint";
import * as host from "./../../constants/host";
import { push } from 'connected-react-router';
import axios from "axios";

const apiGetNewFeed = async getStateAskPage => {
  let token = await localStorage.getItem("jwtToken");
  if (!token) token = await sessionStorage.getItem("jwtToken");
  const { offset, limit, sort } = getStateAskPage.lazyLoading;
  let result = await axios.get(`${host.apiUrl}${api.apiViewAskPost}?offset=${offset}&limit=${limit}&sort=${sort}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiGetSectionNews = async token => {
  let result = await axios.get(`${host.apiUrl}${api.apiViewSectionNews}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiGetVideos = async token => {
  let result = await axios.get(`${host.apiUrl}${api.apiGetVideos}?offset=0&limit=3&sort=desc`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiGetConnections = async token => {
  let result = await axios.get(`${host.apiUrl}${api.apiGetConnections}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};

const apiPostStatus = async newPost => {
  let formData = new FormData()
  if (newPost.askImage !== undefined) {
    if (newPost.askImage[0] !== undefined) {
      formData.append('askImage', newPost.askImage[0]);
    }
  }
  if (newPost.askContent !== undefined) {
    formData.append('askContent', newPost.askContent);
  }
  let token = await localStorage.getItem("jwtToken");
  if (!token) token = await sessionStorage.getItem("jwtToken");
  let result = await axios({
    method: "POST",
    url: `${host.apiUrl}${api.apiPostAsk}`,
    data: formData,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return result;
};

const apiDeleteStatus = async idPost => {
  let token = await localStorage.getItem("jwtToken");
  if (!token) token = await sessionStorage.getItem("jwtToken");
  let result = await axios({
    method: "DELETE",
    url: `${host.apiUrl}${api.apiDeleteAsk}/${idPost}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return result;
};

const apiLikeAsk = async postId => {
  let token = await localStorage.getItem("jwtToken");
  if (!token) token = await sessionStorage.getItem("jwtToken");
  let result = await axios({
    method: "POST",
    url: `${host.apiUrl}${api.apiReaction}/${postId}`,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return result;
};

const apiAddComment = async comment => {
  let token = await localStorage.getItem("jwtToken");
  if (!token) token = await sessionStorage.getItem("jwtToken");
  let result = await axios({
    method: "POST",
    url: `${host.apiUrl}${api.apiAddComment}`,
    data: comment,
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  return result;
};

const apiGetComments = async askId => {
  let token = await localStorage.getItem("jwtToken");
  if (!token) token = await sessionStorage.getItem("jwtToken");
  let result = await axios.get(`${host.apiUrl}${api.apiGetComments}/${askId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};
const apiGetProfile = async () => {
  let token = await localStorage.getItem("jwtToken");
  if (!token) token = await sessionStorage.getItem("jwtToken");
  let result = await axios.get(`${host.apiUrl}${api.apiGetProfile}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    timeout: 1000
  });
  return result;
};
function* getNewFeed() {
  try {
    const getStateAskPage = yield select(state => state.askPage);
    const resp = yield call(apiGetNewFeed, getStateAskPage);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getNewFeedSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      if (error.response.status === 401) {
        yield put({ type: PUSH_SIGNIN });
        yield put(closeModalError());
      }
      else {
        yield put(getNewFeedError(error.response.data));
      }
    } else {
      yield put(push("/500"));
      yield put(getNewFeedError(error));
    }
  }
}

function* getSectionNews() {
  try {
    let token;
    if (localStorage.getItem("jwtToken")) {
      token = yield localStorage.getItem("jwtToken");
    }
    else {
      token = yield sessionStorage.getItem("jwtToken");
    }
    const resp = yield call(apiGetSectionNews, token);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getSectionNewsSuccess(data.data.listPosts));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      if (error.response.status === 401) {
        yield put({ type: PUSH_SIGNIN });
        yield put(closeModalError());
      }
      else {
        yield put(getSectionNewsError(error.response.data));
      }
    } else {
      yield put(getSectionNewsError(error));
    }
  }
}

function* getSectionConnection() {
  try {
    let token;
    if (localStorage.getItem("jwtToken")) {
      token = yield localStorage.getItem("jwtToken");
    }
    else {
      token = yield sessionStorage.getItem("jwtToken");
    }
    const resp = yield call(apiGetConnections, token);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getConnectionSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getConnectionError(error.response.data));
    } else {
      yield put(getConnectionError(error));
    }
  }
}

function* getSectionVideo() {
  try {
    let token = localStorage.getItem("jwtToken");
    if (!token) token = sessionStorage.getItem("jwtToken");
    const resp = yield call(apiGetVideos, token);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getVideoSuccess(data.data.listVideos));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getVideoError(error.response.data));
    } else {
      yield put(getVideoError(error));
    }
  }
}

function* postStatus({ payload }) {
  try {
    let newPost = payload.data;
    const resp = yield call(apiPostStatus, newPost);
    const { data, status } = resp;
    if (status === 200) {
      yield put(postStatusSuccess(data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      if (error.response.status === 401) {
        yield put({ type: PUSH_SIGNIN });
        yield put(closeModalError());
      }
      else {
        yield put(getNewFeedError(error.response.data));
      }
    } else {
      yield put(postStatusError(error));
    }
  }
}

function* deleteStatus({ payload }) {
  try {
    let isPost = payload.data;
    const resp = yield call(apiDeleteStatus, isPost);
    const { status } = resp;
    if (status === 200) {
      yield put(argeeDeleteSuccess(isPost));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      if (error.response.status === 401) {
        yield put({ type: PUSH_SIGNIN });
        yield put(closeModalError());
      }
      else {
        yield put(getNewFeedError(error.response.data));
      }
    } else {
      yield put(getNewFeedError(error));
    }
  }
}

function* likeAsk({ payload }) {
  try {
    let postId = payload.data;
    const resp = yield call(apiLikeAsk, postId);
    const { data, status } = resp;
    if (status === 200) {
      yield put(likeAskSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      if (error.response.status === 401) {
        yield put({ type: PUSH_SIGNIN });
        yield put(closeModalError());
      }
      else {
        yield put(likeAskError(error.response.data));
      }
    } else {
      yield put(likeAskError(error));
    }
  }
}

function* addComment({ payload }) {
  try {
    let comment = payload.data;
    const resp = yield call(apiAddComment, comment);
    const { data, status } = resp;
    if (status === 200) {
      yield put(addCommentSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(addCommentError(error.response.data));
    } else {
      yield put(addCommentError(error));
    }
  }
}

function* getComment({ payload }) {
  try {
    let askId = payload.data;
    const resp = yield call(apiGetComments, askId);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getCommentSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getCommentError(error.response.data));
    } else {
      yield put(getCommentError(error));
    }
  }
}
function* getProfile() {
  try {
    const resp = yield call(apiGetProfile);
    const { data, status } = resp;
    if (status === 200) {
      yield put(getProfileSuccess(data.data));
    }
  } catch (error) {
    if (error.response && error.response.data.error) {
      yield put(getProfileError(error.response.data));
    } else {
      yield put(getProfileError(error));
    }
  }
}
function* getNewFeedSaga() {
  yield takeLatest(constNewFeed.GET_NEW_FEED, getNewFeed);
  yield takeLatest(constNewFeed.GET_SECTION_NEWS, getSectionNews);
  yield takeLatest(constNewFeed.GET_VIDEO, getSectionVideo);
  yield takeLatest(constNewFeed.GET_CONNECTION, getSectionConnection);
  yield takeLatest(constNewFeed.LIKE_ASK, likeAsk);
  yield takeLatest(constNewFeed.ADD_COMMENT, addComment);
  yield takeLatest(constNewFeed.GET_COMMENT, getComment);

  yield takeLatest(constNewFeed.POST_STATUS, postStatus);
  yield takeLatest(constNewFeed.ARGEE_DELETE, deleteStatus);
  yield takeLatest(constNewFeed.GET_PROFILE, getProfile);
}

export default getNewFeedSaga();
