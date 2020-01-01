import * as types from "./constants";

const initialState = {
  listAsks: [],
  errors: [],
  sectionNews: [],
  sectionVideos: [],
  sectionConnections: [],
  askComment: [],
  userProfile: [],
  open: false,
  openVideo: false,
  linkVideo: "",
  openModalDelete: false,
  idAskDelete: "",
  isLoadPostAsk: false,
  isLoadsectionVideos: false,
  isLoadsectionConnections: false,
  lazyLoading: {
    offset: 0,
    limit: 3,
    sort: 'desc',
    limitPage: 3,
    isFetching: false,
    isFetched: false,
  },
  openModalImage: false,
  linkImage: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    //get ask
    case types.GET_NEW_FEED: {
      return {
        ...state,
      };
    }
    case types.GET_NEW_FEED_SUCCESS: {
      const { data } = action.payload;
      if (data.length === state.lazyLoading.limit) {
        return {
          ...state,
          listAsks: data,
          lazyLoading: {
            ...state.lazyLoading,
            limit: state.lazyLoading.limit + state.lazyLoading.limitPage,
            isFetching: false,
          }
        };
      }
      else {
        return {
          ...state,
          listAsks: data,
          lazyLoading: {
            ...state.lazyLoading,
            isFetched: true,
          }
        };
      }
    }

    case types.GET_NEW_FEED_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    //get news
    case types.GET_SECTION_NEWS: {
      return {
        ...state,
        sectionNews: [],
      };
    }
    case types.GET_SECTION_NEWS_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        sectionNews: data
      };
    }
    case types.GET_SECTION_NEWS_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    //get video
    case types.GET_VIDEO: {
      return {
        ...state,
        sectionVideos: [],
        isLoadsectionVideos: true,
      };
    }
    case types.GET_VIDEO_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        sectionVideos: data,
        isLoadsectionVideos: false,
      };
    }
    case types.GET_VIDEO_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true,
        isLoadsectionVideos: false,
      };
    }
    //get connection
    case types.GET_CONNECTION: {
      return {
        ...state,
        sectionConnections: [],
        isLoadsectionConnections: true,
      };
    }
    case types.GET_CONNECTION_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        sectionConnections: data,
        isLoadsectionConnections: false,
      };
    }
    case types.GET_CONNECTION_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true,
        isLoadsectionConnections: false,
      };
    }
    //like ask
    case types.LIKE_ASK: {
      return {
        ...state,
      };
    }
    case types.LIKE_ASK_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.LIKE_ASK_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        open: true,
        errors: error,
      };
    }
    //user post ask
    case types.POST_STATUS: {
      return {
        ...state,
        isLoadPostAsk: true,
      };
    }
    case types.POST_STATUS_SUCCESS: {
      const newPost = action.payload.data.data;
      let dataNewPost = [newPost].concat(state.listAsks);
      return {
        ...state,
        isLoadPostAsk: false,
        listAsks: dataNewPost,
      };
    }
    case types.POST_STATUS_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        isLoadPostAsk: false,
        errors: error,
        open: true,
      };
    }
    //user comment ask
    case types.ADD_COMMENT: {
      return {
        ...state,
      };
    }
    case types.ADD_COMMENT_SUCCESS: {
      const newComment = action.payload.data.comment;
      const idAsk = action.payload.data.comment.ask_id;
      const numberOfComments = action.payload.data.numberOfComments;
      let listComment = [newComment].concat(state.askComment);
      for (var i in state.listAsks) {
        if (state.listAsks[i].id === idAsk) {
           state.listAsks[i].countComments = numberOfComments;
           break;
        }
      }
      return {
        ...state,
        askComment: listComment,
      };
    }
    case types.ADD_COMMENT_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true,
      };
    }
    //get comment
    case types.GET_COMMENT: {
      return {
        ...state,
      };
    }
    case types.GET_COMMENT_SUCCESS: {
      const { data } = action.payload;
      let mergeArray = (p, ...arrs) => [].concat(...arrs).reduce((a, b) => !a.filter(c => b[p] === c[p]).length ? [...a, b] : a, []);
      let listComment = mergeArray('id', state.askComment, data);
      return {
        ...state,
        askComment: listComment,
      };
    }
    case types.GET_COMMENT_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    //get profile
    case types.GET_PROFILE: {
      return {
        ...state,
      };
    }
    case types.GET_PROFILE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        userProfile: data,
      };
    }
    case types.GET_PROFILE_ERROR: {
      let { error } = action.payload;
      return {
        ...state,
        errors: error,
        open: true
      };
    }
    //modal error
    case types.CLOSE_GET_NEW_FEED_ERROR_MODAL: {
      return {
        ...state,
        isLoadPostAsk: false,
        open: false,
      };
    }
    //modal video
    case types.OPEN_MODAL_VIDEO: {
      let { data } = action.payload;
      return {
        ...state,
        openVideo: true,
        linkVideo: data,
      };
    }
    case types.CLOSE_MODAL_VIDEO: {
      return {
        ...state,
        openVideo: false,
      };
    }
    //modal delete
    case types.OPEN_MODAL_DELETE: {
      let { data } = action.payload;
      return {
        ...state,
        openModalDelete: true,
        idAskDelete: data
      };
    }
    case types.CLOSE_MODAL_DELETE: {
      return {
        ...state,
        openModalDelete: false,
        idAskDelete: ""
      };
    }
    case types.ARGEE_DELETE: {
      return {
        ...state
      };
    }
    case types.ARGEE_DELETE_SUCCESS: {
      let { data } = action.payload;
      return {
        ...state,
        listAsks: state.listAsks.filter(item => item.id !== data)
      };
    }
    //modal image
    case types.CLOSE_MODAL_IMAGE:
      return {
        ...state,
        openModalImage: false,
      };
    case types.OPEN_MODAL_IMAGE:
      return {
        ...state,
        openModalImage: true,
      };
    case types.SET_LINK_IMAGE:
      return {
        ...state,
        linkImage: action.link,
      };
    default:
      return state;
  }
};

export default reducer;
