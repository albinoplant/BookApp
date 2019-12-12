export const GET_BOOK = 'firstReactNative/books/LOAD'
export const GET_BOOK_SUCCESS = 'firstReactNative/books/LOAD_SUCCESS'
export const GET_BOOK_FAIL = 'firstReactNative/books/LOAD_FAIL'

export const SET_SEARCH_INPUT = 'firstReactNative/books/GET_SEARCH_INPUT'

export default function reducer(state = { books: [], searchInput: '' }, action){
    switch (action.type) {
        case SET_SEARCH_INPUT:
            return { ...state, searchInput: action.payload };
        case GET_BOOK:
            return { ...state, loading: true };
        case GET_BOOK_SUCCESS:
            return { ...state, loading:false, books: action.payload.data };
        case GET_BOOK_FAIL:
            return { ...state, loading: false, error: 'Error while fetching books'};
        default:
            return state;    
    }
}

export function searchVolume(searchKeyword) {
    return {
        type: GET_BOOK,
        payload: {
            request: {
                url: `${searchKeyword}&key=AIzaSyCOMe-P8gjCm8p4fX-f2orl1YFoURTlhDY`
            }
        }
    };
}

export function setSearchInput(searchKeyword) {
    return {
        type: SET_SEARCH_INPUT,
        payload: searchKeyword
    };
}
