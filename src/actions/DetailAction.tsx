import { RemoveFromCart, SendCart, SendCartFail, SendCartSuccess } from "../types/DetailParamList";
import { Dispatch, Action } from "redux";

export const postBagsAction = (item: Array<any>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(AddToCartAction());
        dispatch(senData(item))
    }
}
export const postBagRemoveAction = (item: Array<any>) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch(AddToCartAction());
        dispatch(senData(item))
    }
}

export const AddToCartAction = (): SendCart => ({
    type: 'SEND_TO_CART',
});

export const RemoveFromCartAction = (cart: Array<any>): RemoveFromCart => ({
    type: 'REMOVE_FROM_CART',
    data: cart
});

export const senData = (data: Array<any>): SendCartSuccess => ({
    type: 'SEND_TO_CART_SUCCESS',
    data: data
});

export const senDataFail = (message: string): SendCartFail => ({
    type: 'SEND_TO_CART_FAIL',
});