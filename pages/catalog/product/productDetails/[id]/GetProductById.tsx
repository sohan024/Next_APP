import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductAction } from '../../../../../store/actions/catalog/productActions';
import { RootState } from '../../../../../store';
import { GetProductByIdModel, PictureModel } from '../../../../../models/catalog/productModels';

export default function GetProductById() {

  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();

  const product = useSelector((state: RootState) => {
    return state.getProductReducer.data as GetProductByIdModel;
  });

  useEffect(() => {
    if (id !== undefined) {
      dispatch(getProductAction(id) as any);
    }
  }, [dispatch, id]);


  return (
    <>
      <div>ProductDetails</div>
      <p>{product?.Name}</p>
      <p>{product?.Price}</p>
      <p>{product?.ShortDescription}</p>
      <div dangerouslySetInnerHTML={{ __html: product?.FullDescription }} />
      <img src={product?.DefaultPictureModel?.ImageUrl} />
      {product?.PictureModels?.map((item: PictureModel, index: any) => {
        return (
          <img src={item?.ImageUrl} />
        )
      })}
    </>

  )
}

