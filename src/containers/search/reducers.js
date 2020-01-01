import * as types from "./constants";

const initialState = {
    openModalSearch: false,
    asks: [],
    learns: [],
    keyword: "",
    sumResultAsk: 0,
    sumResultLearn: 0,
    errors: [],
    open: false,
    loadingSearch: false,
};

var navBar = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL_SEACH: {
            return {
                ...state,
                openModalSearch: true,
            };
        }
        case types.GET_TOP_SEARCH: {
            return {
                ...state,
                loadingSearch: true,
                asks: [],
                learns: [],
                sumResultAsk: 0,
                sumResultLearn: 0,
            };
        }
        case types.GET_TOP_SEARCH_SUCCESS: {
            console.log(action.payload.data);
            return {
                ...state,
                loadingSearch: false,
                asks: action.payload.data.resultAsk,
                learns: action.payload.data.resultLearn,
                sumResultAsk: action.payload.data.sumResultAsk,
                sumResultLearn: action.payload.data.sumResultLearn,
            };
        }
        case types.SET_KEYWORD_SEARCH: {
            return {
                ...state,
                keyword: action.keyword
            };
        }
        case types.CLOSE_MODAL_SEARCH: {
            return {
                ...state,
                openModalSearch: false,
            };
        }
        case types.GET_TOP_SEARCH_ERROR: {
            return {
                ...state,
                errors: action.errors,
                open: true,
            };
        }
        case types.CLOSE_MODAL_SEARCH_ERROR: {
            return {
                ...state,
                errors: [],
                open: false,
            };
        }
        default:
            return state;
    }
};

export default navBar;