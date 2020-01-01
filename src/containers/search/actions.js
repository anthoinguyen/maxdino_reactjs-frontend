import * as types from "./constants";

export const getTopSearch = (keyword) => {
    return {
        type: types.GET_TOP_SEARCH,
        keyword
    }
};

export const getTopSearchSuccess = (data) => {
    return {
        type: types.GET_TOP_SEARCH_SUCCESS,
        payload: {
            data
          }
    }
};

export const onOpenModalSearch = () => {
    return {
        type: types.OPEN_MODAL_SEACH,
    }
};

export const setKeywordSearch = (keyword) => {
    return {
        type: types.SET_KEYWORD_SEARCH,
        keyword
    }
};

export const onCloseModal = () => {
    return {
        type: types.CLOSE_MODAL_SEARCH,
    }
};

export const getTopSearchError = (errors) => {
    return {
        type: types.GET_TOP_SEARCH_ERROR,
        errors
    }
};

export const closeModalError = () => {
    return {
        type: types.CLOSE_MODAL_SEARCH_ERROR,
    }
};

