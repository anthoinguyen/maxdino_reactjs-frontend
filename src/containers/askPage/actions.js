import * as types from "./constants";
// get Ask post
export const getNewFeed = data => {
  return {
    type: types.GET_NEW_FEED,
    payload: {
      data
    }
  };
};

export const getNewFeedSuccess = data => {
  return {
    type: types.GET_NEW_FEED_SUCCESS,
    payload: {
      data
    }
  };
};
export const getNewFeedError = error => {
  return {
    type: types.GET_NEW_FEED_ERROR,
    payload: {
      error
    }
  };
};

export const setFetchingData = () => {
  return {
      type: types.SET_FETCHING_DATA
  };
};
//get news admin post
export const getSectionNews = data => {
  return {
    type: types.GET_SECTION_NEWS,
    payload: {
      data
    }
  };
};

export const getSectionNewsSuccess = data => {
  return {
    type: types.GET_SECTION_NEWS_SUCCESS,
    payload: {
      data
    }
  };
};

export const getSectionNewsError = error => {
  return {
    type: types.GET_SECTION_NEWS_ERROR,
    payload: {
      error
    }
  };
};

//get video
export const getVideo = data => {
  return {
    type: types.GET_VIDEO,
    payload: {
      data
    }
  };
};

export const getVideoSuccess = data => {
  return {
    type: types.GET_VIDEO_SUCCESS,
    payload: {
      data
    }
  };
};

export const getVideoError = error => {
  return {
    type: types.GET_VIDEO_ERROR,
    payload: {
      error
    }
  };
};
//get connection
export const getConnection = data => {
  return {
    type: types.GET_CONNECTION,
    payload: {
      data
    }
  };
};

export const getConnectionSuccess = data => {
  return {
    type: types.GET_CONNECTION_SUCCESS,
    payload: {
      data
    }
  };
};

export const getConnectionError = error => {
  return {
    type: types.GET_CONNECTION_ERROR,
    payload: {
      error
    }
  };
};
//like ask
export const likeAsk = data => {
  return {
    type: types.LIKE_ASK,
    payload: {
      data
    }
  };
};
export const likeAskSuccess = data => {
  return {
    type: types.LIKE_ASK_SUCCESS,
    payload: {
      data
    }
  };
};

export const likeAskError = error => {
  return {
    type: types.LIKE_ASK_ERROR,
    payload: {
      error
    }
  };
};
//get ask comment
export const getComment = data => {
  return {
    type: types.GET_COMMENT,
    payload: {
      data
    }
  };
};

export const getCommentSuccess = data => {
  return {
    type: types.GET_COMMENT_SUCCESS,
    payload: {
      data
    }
  };
};

export const getCommentError = error => {
  return {
    type: types.GET_COMMENT_ERROR,
    payload: {
      error
    }
  };
};
// user commnet ask
export const addComment = data => {
  return {
    type: types.ADD_COMMENT,
    payload: {
      data
    }
  };
};

export const addCommentSuccess = data => {
  return {
    type: types.ADD_COMMENT_SUCCESS,
    payload: {
      data
    }
  };
};


export const addCommentError = error => {
  return {
    type: types.ADD_COMMENT_ERROR,
    payload: {
      error
    }
  };
};

// user post ask
export const postStatus = data => {
  return {
    type: types.POST_STATUS,
    payload: {
      data
    }
  };
};

export const postStatusSuccess = data => {
  return {
    type: types.POST_STATUS_SUCCESS,
    payload: {
      data
    }
  };
};

export const postStatusError = error => {
  return {
    type: types.POST_STATUS_ERROR,
    payload: {
      error
    }
  };
};

export const closeModalError = () => {
  return {
    type: types.CLOSE_GET_NEW_FEED_ERROR_MODAL
  };
};
//get profile
export const getProfile = () => {
  return {
    type: types.GET_PROFILE,
  };
};

export const getProfileSuccess = data => {
  return {
    type: types.GET_PROFILE_SUCCESS,
    payload: {
      data
    }
  };
};

export const getProfileError = error => {
  return {
    type: types.GET_PROFILE_ERROR,
    payload: {
      error
    }
  };
};
//modal video
export const openModalVideo = data => {
  return {
    type: types.OPEN_MODAL_VIDEO,
    payload: {
      data
    }
  };
};

export const closeModalVideo = () => {
  return {
    type: types.CLOSE_MODAL_VIDEO
  };
};
//modal delete
export const openModalDelete = data => {
  return {
    type: types.OPEN_MODAL_DELETE,
    payload: {
      data
    }
  };
};

export const closeModalDelete = () => {
  return {
    type: types.CLOSE_MODAL_DELETE
  };
};

export const argeeDelete = data => {
  return {
    type: types.ARGEE_DELETE,
    payload: {
      data
    }
  };
};

export const argeeDeleteSuccess = data => {
  return {
    type: types.ARGEE_DELETE_SUCCESS,
    payload: {
      data
    }
  };
};
//modal image
export const closeModalImage = () => {
  return {
      type: types.CLOSE_MODAL_IMAGE,
  }
};

export const openModalImage = () => {
  return {
      type: types.OPEN_MODAL_IMAGE,
  }
};

export const setLinkImage = (link) => {
  return {
      type: types.SET_LINK_IMAGE,
      link,
  }
};


