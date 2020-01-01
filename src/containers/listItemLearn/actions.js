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

export const setFetchingData = () => {
    return {
        type: types.SET_FETCHING_DATA
    };
};

export const closeModalError = () => {
    return {
        type: types.CLOSE_LEARN_PAGE_ERROR_MODAL_LIST,
    }
};

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
