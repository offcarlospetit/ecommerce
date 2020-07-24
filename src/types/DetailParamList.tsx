import { StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"

export type DetailParamList = {
    Detail: { swiper: object };
    Cart: {
        name: string,
        submit?: React.MutableRefObject<() => void>
    };
}

export type SendCart = {
    type: 'SEND_TO_CART';
}

export type SendCartFail = {
    type: 'SEND_TO_CART_FAIL';
}

export type SendCartSuccess = {
    type: 'SEND_TO_CART_SUCCESS';
    data: Array<any>;
}

export type RemoveFromCart = {
    type: 'REMOVE_FROM_CART';
    data: Array<any>;
}

export type DetailNavProps<T extends keyof DetailParamList> = {
    navigation: StackNavigationProp<DetailParamList, T>;
    route: RouteProp<DetailParamList, T>;
}