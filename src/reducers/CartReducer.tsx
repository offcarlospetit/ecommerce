import { RemoveFromCart, SendCart, SendCartFail, SendCartSuccess } from "../types/DetailParamList";

type CartAction =
    | RemoveFromCart
    | SendCart
    | SendCartFail
    | SendCartSuccess


export interface State {
    shopingBag: Array<any>;
    isFetching: Boolean;
    error: Boolean,
}


const defaultState: State = {
    shopingBag: [],
    isFetching: false,
    error: false,
};

const cartReducer = (state: State = defaultState, action: CartAction): State => {
    console.log("holas", action);
    switch (action.type) {
        case 'SEND_TO_CART':
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case 'SEND_TO_CART_SUCCESS':
            return {
                ...state,
                shopingBag: [...action.data],
                isFetching: false,
                error: false
            }
        case 'SEND_TO_CART_FAIL':
            return {
                ...state,
                isFetching: false,
                error: true
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                shopingBag: [...action.data]
            }


        default:
            return state
    }
};

export default cartReducer