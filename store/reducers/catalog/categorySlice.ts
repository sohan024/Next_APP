import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../..';
import { getCategoryListService } from '../../../httpServices/catalog/categoryServices';

interface CategoryState {
    categoryList: any[]; 
    loading: boolean;
}

const initialState: CategoryState = {
    categoryList: [],
    loading: false,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

        getCategoryListStart(state) {
            state.loading = true;
        },
        getCategoryListSuccess(state, action: PayloadAction<any>) {
            state.categoryList = action.payload;
            state.loading = false;
        },

    },
});

export const {
    getCategoryListStart,
    getCategoryListSuccess,
} = categorySlice.actions;

export default categorySlice.reducer;



export const fetchCategoryList = (): AppThunk => async (dispatch: any) => {
    try {
        dispatch(getCategoryListStart());
        const data = await getCategoryListService();
        const pload = (await data).data;
        dispatch(getCategoryListSuccess(pload));
    } catch (error) {
        console.log('error', error);
    }
};
