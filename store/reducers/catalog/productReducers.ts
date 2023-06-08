import { GET_PRODUCT, GET_PRODUCT_LIST } from "../../constants/catalog/productConstants";

export function getProductListReducer(state = { data: [] }, action: any) {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return { loading: false, data: action.payload };
        default:
            return state;
    }
}


export function getProductReducer(state = { data: {} }, action: any) {
    switch (action.type) {
        case GET_PRODUCT:
            return { loading: false, data: action.payload };
        default:
            return state;
    }
}
