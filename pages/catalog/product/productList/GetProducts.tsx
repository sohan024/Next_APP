import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { useEffect } from "react";
import { fetchProductList } from "../../../../store/reducers/catalog/productSlice";

export default function GetProducts() {

    const router = useRouter();

    const dispatch: AppDispatch = useDispatch();

    const products = useSelector((state: RootState) => state.product.productList);

    useEffect(() => {
        dispatch(fetchProductList());
    }, [dispatch]);

    const handleButtonClick = (id: any) => {
        router.push(`/catalog/product/productDetails/${id}/GetProductById`);
    }

    return (
        <>
            {products?.map((item: any, index: any) => {
                return (<div key={index}>
                    <h1>{item.Name}</h1>
                    <button onClick={() => handleButtonClick(item.Id)}>Go to Product Details</button>
                </div>)
            })}
        </>
    )
}
