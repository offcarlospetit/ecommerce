import { FetchList, FetchListFail, FetchListSuccess } from "../types/HomeParamList";

type HomeAction =
    | FetchList
    | FetchListFail
    | FetchListSuccess


export interface State {
    data: [];
    isFetching: Boolean;
    error: Boolean,
}


const defaultState: State = {
    data: [],
    isFetching: false,
    error: false,
};

const homeReducer = (state: State = defaultState, action: HomeAction): State => {
    switch (action.type) {
        case 'FETCHING_LIST':
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case 'FETCH_LIST_SUCCESS':
            return {
                ...state,
                data: action.data,
                isFetching: false,
                error: false
            }
        case 'FETCHING_LIST_FAIL':
            return {
                ...state,
                data: action.data,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
};

export default homeReducer