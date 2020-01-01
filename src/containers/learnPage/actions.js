import * as types from "./constants";

export const getLearns = () => {
    return {
        type: types.GET_LIST_LEARN,
    }
};

export const getLearnsSuccess = (learns) => {
    return {
        type: types.GET_LEARN_SUCCESS,
        learns,
    }
};

export const getLearnsError = (errors) => {
    return {
        type: types.GET_LEARN_ERROR,
        errors,
    }
};

export const closeModalError = () => {
    return {
        type: types.CLOSE_LEARN_PAGE_ERROR_MODAL,
    }
};

export const getVideo = () => {
    return {
        type: types.GET_VIDEO_LEARN,
    };
};

export const getVideoSuccess = data => {
    return {
        type: types.GET_VIDEO_SUCCESS_LEARN,
        payload: {
            data
        }
    };
};

export const openModalVideo = link => {
    return {
        type: types.OPEN_MODAL_VIDEO_LEARN,
        payload: {
            link
        }
    };
};

export const closeModalVideo = () => {
    return {
        type: types.CLOSE_MODAL_VIDEO_LEARN
    };
};

export const setFetchingData = () => {
    return {
        type: types.SET_FETCHING_DATA
    };
};

export const getVideoError = errors => {
    return {
        type: types.GET_VIDEO_ERROR_LEARN,
        errors
    };
};
