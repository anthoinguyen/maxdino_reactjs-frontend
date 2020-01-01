import * as types from "./constants";


export const getLearnsError = (errors) => {
    return {
        type: types.GET_LEARN_ERROR_DETAIL,
        errors,
    }
};

export const closeModalError = () => {
    return {
        type: types.CLOSE_LEARN_PAGE_ERROR_MODAL_DETAIL,
    }
};

export const getVideo = () => {
    return {
        type: types.GET_VIDEO_LEARN_DETAIL,
    };
};

export const getVideoSuccess = data => {
    return {
        type: types.GET_VIDEO_SUCCESS_LEARN_DETAIL,
        payload: {
            data
        }
    };
};

export const openModalVideo = link => {
    return {
        type: types.OPEN_MODAL_VIDEO_LEARN_DETAIL,
        payload: {
            link
        }
    };
};

export const closeModalVideo = () => {
    return {
        type: types.CLOSE_MODAL_VIDEO_LEARN_DETAIL
    };
};

export const setIdLearn = (id) => {
    return {
        type: types.SET_ID_LEARN_DETAIL,
        id
    }
};

export const getLearnDetail = () => {
    return {
        type: types.GET_LEARN_DETAIL_DETAIL,
    }
};

export const getLearnDetailSuccess = (data) => {
    return {
        type: types.GET_LEARN_DETAIL_SUCCESS_DETAIL,
        payload: {
            data
        }
    }
};

export const getVideoError = errors => {
    return {
        type: types.GET_VIDEO_ERROR_LEARN_DETAIL,
        errors
    };
};

export const getLearnDetailError = errors => {
    return {
        type: types.GET_LEARN_DETAIL_ERROR,
        errors
    };
};

export const closeModalImage = () => {
    return {
        type: types.CLOSE_MODAL_IMAGE_DETAIL,
    }
};

export const openModalImage = () => {
    return {
        type: types.OPEN_MODAL_IMAGE_DETAIL,
    }
};

export const setLinkImage = (link) => {
    return {
        type: types.SET_LINK_IMAGE_DETAIL,
        link,
    }
};