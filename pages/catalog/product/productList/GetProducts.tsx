import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductListAction } from '../../../../store/actions/catalog/productActions';
import { RootState } from '../../../../store';

export default function GetProducts() {

    const router = useRouter();

    const dispatch = useDispatch();

    const products = useSelector((state: RootState) => {
        return state.getProductListReducer.data;
    });

    useEffect(() => {
        dispatch(getProductListAction() as any);
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
