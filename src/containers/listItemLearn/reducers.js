import * as types from "./constants";

const initialState = {
    learns: [],
    errors: [],
    open: false,
    lazyLoading: {
        offset: 0,
        limit: 3,
        limitPage: 3,
        isFetching: false,
        isFetched: false,
    },
    openModalImage: false,
    linkImage: "",
};

var learnPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LEARN_SUCCESS:
            if (action.learns.length === state.lazyLoading.limit) {
                return {
                    ...state,
                    learns: action.learns,
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
                    learns: action.learns,
                    lazyLoading: {
                        ...state.lazyLoading,
                        isFetched: true,
                    }
                };
            }
        case types.GET_LEARN_ERROR:
            return {
                ...state,
                errors: action.errors,
                open: true,
            };
        case types.CLOSE_LEARN_PAGE_ERROR_MODAL_LIST:
            return {
                ...state,
                open: false,
            };
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

export default learnPageReducer;