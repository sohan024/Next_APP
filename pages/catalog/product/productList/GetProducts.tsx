import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store";
import { useEffect } from "react";
import { fetchProductList } from "../../../../store/reducers/catalog/productSlice";
import { PictureModel, ProductModel } from "../../../../models/catalog/productModels";
import { fetchCategoryList } from "../../../../store/reducers/catalog/categorySlice";


export default function GetProducts() {

    const router = useRouter();

    const dispatch: AppDispatch = useDispatch();

    const products = useSelector((state: RootState) => state.product.productList as ProductModel[]);

    useEffect(() => {
        dispatch(fetchProductList());
    }, [dispatch]);

    const handleButtonClick = (id: any) => {
        router.push(`/catalog/product/productDetails/${id}/GetProductById`);
    }

    return (
        <>
            <div className="product-list">
                {products.map((product: ProductModel) => (
                    <div key={product.Id} className="product-item" onClick={() => handleButtonClick(product.Id)}>
                        <img src={product?.PictureModels?.map((_: PictureModel) => _.FullSizeImageUrl)[0]} alt={product.Name} />
                        <h3>{product.Name}</h3>
                        <p>{product.ProductPrice?.Price}</p>
                        <p>{product.ShortDescription}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .product-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    align-items: flex-start;
                    margin-top: 2rem;
                }

                .product-item {
                    flex: 0 0 20%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem;
                }

                .product-item img {
                    width: 100%;
                    height: auto;
                    margin-bottom: 1rem;
                }
            `}</style>
        </>

    )
}
