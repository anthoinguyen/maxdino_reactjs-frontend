import * as types from "./constants";

const initialState = {
    errors: [],
    open: false,
    sectionVideos: [],
    openVideo: false,
    linkVideo: "",
    isLoadsectionVideos: false,
};

var learnPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_VIDEO_ERROR_LEARN:
            return {
                ...state,
                errors: action.errors,
                open: true,
                isLoadsectionVideos: false,
            };
        case types.GET_VIDEO_LEARN:
            return {
                ...state,
                isLoadsectionVideos: true,
            };
        case types.CLOSE_LEARN_PAGE_ERROR_MODAL:
            return {
                ...state,
                open: false,
            };
        case types.GET_VIDEO_SUCCESS_LEARN: {
            const { data } = action.payload;
            return {
                ...state,
                sectionVideos: data,
                isLoadsectionVideos: false,
            };
        }
        case types.OPEN_MODAL_VIDEO_LEARN: {
            let { link } = action.payload;
            return {
                ...state,
                openVideo: true,
                linkVideo: link,
            };
        }
        case types.CLOSE_MODAL_VIDEO_LEARN: {
            return {
                ...state,
                openVideo: false,
                linkVideo: "",
            };
        }
        default:
            return state;
    }
};

export default learnPageReducer;