import { GET } from "../service";

export const getCategoryListService = () => {
    return GET(`/api/Category/GetCategories`);
};
