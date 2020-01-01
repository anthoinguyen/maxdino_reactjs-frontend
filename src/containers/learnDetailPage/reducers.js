import * as types from "./constants";

const initialState = {
    errors: [],
    open: false,
    sectionVideos: [],
    openVideo: false,
    linkVideo: "",
    idLearnDetail: 0,
    learnDetail: [],
    isLoadsectionVideos: false,
    isLoadingLearnDetail: false,
    linkImage: "",
    openModalImage: false,
};

var learnPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LEARN_DETAIL_DETAIL:
            return {
                ...state,
                isLoadingLearnDetail: true,
            };
        case types.GET_LEARN_DETAIL_ERROR:
            return {
                ...state,
                errors: action.errors,
                open: true,
                isLoadingLearnDetail: false,
            };
        case types.CLOSE_LEARN_PAGE_ERROR_MODAL_DETAIL:
            return {
                ...state,
                open: false,
            };
        case types.GET_VIDEO_SUCCESS_LEARN_DETAIL: {
            const { data } = action.payload;
            window.scrollTo(0, 0);
            return {
                ...state,
                sectionVideos: data,
                isLoadsectionVideos: false,
            };
        }
        case types.GET_VIDEO_LEARN_DETAIL: {
            return {
                ...state,
                isLoadsectionVideos: true,
            };
        }
        case types.GET_VIDEO_ERROR_LEARN_DETAIL: {
            let { error } = action.payload;
            return {
                ...state,
                errors: error,
                open: true,
                isLoadsectionVideos: false,
            };
        }
        case types.OPEN_MODAL_VIDEO_LEARN_DETAIL: {
            let { link } = action.payload;
            return {
                ...state,
                openVideo: true,
                linkVideo: link,
            };
        }
        case types.CLOSE_MODAL_VIDEO_LEARN_DETAIL: {
            return {
                ...state,
                openVideo: false,
                linkVideo: "",
            };
        }
        case types.SET_ID_LEARN_DETAIL: {
            console.log(action.id);
            return {
                ...state,
                idLearnDetail: action.id,
            };
        }
        case types.GET_LEARN_DETAIL_SUCCESS_DETAIL: {
            console.log(action.payload.data);
            return {
                ...state,
                learnDetail: action.payload.data,
                isLoadingLearnDetail: false,
            };
        }
        case types.CLOSE_MODAL_IMAGE_DETAIL:
            return {
                ...state,
                openModalImage: false,
            };
        case types.OPEN_MODAL_IMAGE_DETAIL:
            return {
                ...state,
                openModalImage: true,
            };
        case types.SET_LINK_IMAGE_DETAIL:
            return {
                ...state,
                linkImage: action.link,
            };
        default:
            return state;
    }
};

export default learnPageReducer;