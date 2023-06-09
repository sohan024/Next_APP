import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductListService, getProductService } from '../../../httpServices/catalog/productServices';
import { AppThunk } from '../..';

interface ProductState {
    productList: any[]; 
    product: any; 
    loading: boolean;
}

const initialState: ProductState = {
    productList: [],
    product: {},
    loading: false,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        getProductListStart(state) {
            state.loading = true;
        },
        getProductListSuccess(state, action: PayloadAction<any>) {
            state.productList = action.payload;
            state.loading = false;
        },


        getProductStart(state) {
            state.loading = true;
        },
        getProductSuccess(state, action: PayloadAction<any>) {
            state.product = action.payload;
            state.loading = false;
        },
    },
});

export const {
    getProductListStart,
    getProductListSuccess,
    getProductStart,
    getProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;



export const fetchProductList = (): AppThunk => async (dispatch: any) => {
    try {
        dispatch(getProductListStart());
        const data = await getProductListService();
        const pload = (await data).data;
        dispatch(getProductListSuccess(pload));
    } catch (error) {
        console.log('error', error);
    }
};

export const fetchProduct = (id: any): AppThunk => async (dispatch: any) => {
    try {
        dispatch(getProductStart());
        const data = await getProductService(id);
        const pload = (await data).data;
        dispatch(getProductSuccess(pload));
    } catch (error) {
        console.log('error', error);
    }
};
