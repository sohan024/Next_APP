import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store';
import { GetProductByIdModel, PictureModel } from '../../../../../models/catalog/productModels';
import { fetchProduct } from '../../../../../store/reducers/catalog/productSlice';


export default function GetProductById() {

  const router = useRouter();
  const { id } = router.query;

  const dispatch: AppDispatch = useDispatch();

  const product = useSelector((state: RootState) => state.product.product as GetProductByIdModel);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id]);


  return (
    <>

      <div className="product-details-container">
        <div className="product-images">
          <div className="large-image">
            <img src={product.DefaultPictureModel?.FullSizeImageUrl} alt={product.Name} />
          </div>
          <div className="small-images">
            {product.PictureModels?.slice(1).map((image: PictureModel, index: any) => (
              <div key={index} className="small-image">
                <img src={image.FullSizeImageUrl} alt={product.Name} />
              </div>
            ))}
          </div>
        </div>
        <div className="product-info">
          <h2>{product.Name}</h2>
          <p>{product.Price}</p>
          <p>{product.ShortDescription}</p>
          <div dangerouslySetInnerHTML={{ __html: product?.FullDescription }} />
          <div className="buttons">
            <button className="add-to-cart-button">Add to Cart</button>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
        <style jsx>{`
        .product-details-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 2rem;
        }

        .product-images {
          flex: 0 0 50%;
        }

        .large-image img {
          width: 80%;
          height: 500px;
        }

        .small-images {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-top: 1rem;
        }

        .small-image {
          margin-right: 1rem;
        }

        .small-image img {
          width: 60px;
          height: 60px;
          object-fit: cover;
        }

        .product-info {
          flex: 0 0 50%;
        }

        .buttons {
          margin-top: 1rem;
        }

        .add-to-cart-button,
        .buy-now-button {
          padding: 0.5rem 1rem;
          margin-right: 0.5rem;
        }
      `}</style>
      </div>


      {/* <div>ProductDetails</div>
      <p>{product?.Name}</p>
      <p>{product?.Price}</p>
      <p>{product?.ShortDescription}</p>
      <div dangerouslySetInnerHTML={{ __html: product?.FullDescription }} />
      <img src={product?.DefaultPictureModel?.ImageUrl} />
      {product?.PictureModels?.map((item: PictureModel, index: any) => {
        return (
          <img src={item?.ImageUrl} />
        )
      })} */}
    </>
  )
}



