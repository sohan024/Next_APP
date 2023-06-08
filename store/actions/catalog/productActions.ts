import { getProductListService, getProductService } from "../../../httpServices/catalog/productServices";
import { GET_PRODUCT, GET_PRODUCT_LIST } from "../../constants/catalog/productConstants";

export const getProductListAction = () => async (dispatch: any) => {
    try {
        const data = getProductListService();
        const pload = (await data).data;
        dispatch({ type: GET_PRODUCT_LIST, payload: pload });
    }
    catch (error) {
        console.log("error", error);
    }
}


export const getProductAction = (id: any) => async (dispatch: any) => {
    try {
        var data = getProductService(id);
        const pload = (await data).data;
        dispatch({ type: GET_PRODUCT, payload: pload });
    }
    catch (error) {
        console.log("error", error);
    }
}