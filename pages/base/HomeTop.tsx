import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store";
import { fetchCategoryList } from "../../store/reducers/catalog/categorySlice";


const bannerSlides = [
    {
        id: 1,
        image: '../banner/banner1.jpg',
    },
];


export default function HomeTop() {

    const router = useRouter();

    const dispatch: AppDispatch = useDispatch();

    const categories = useSelector((state: RootState) => state.category.categoryList);

    useEffect(() => {
        dispatch(fetchCategoryList());
    }, [dispatch]);

    return (
        <>
            <div className="row-container">
                <div className="main-category-list">
                    <div className="main-category-container">
                        {categories.map((category, index) => (
                            <div key={index} className="main-category-item">
                                {category.Name}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="banner-slider">
                    <div className="banner-container">
                        {bannerSlides.map((slide) => (
                            <div key={slide.id} className="banner-slide">
                                <img src={slide.image} alt={`Banner ${slide.id}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .homepage-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .row-container {
                    display: flex;
                    width: 100%;
                    max-width: 1200px;
                    justify-content: space-between;
                    margin-bottom: 2rem;
                }

                .main-category-list {
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .main-category-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 1rem;
                    padding: 1rem;
                }

                .main-category-item {
                    background-color: #f5f5f5;
                    padding: 1rem;
                }

                .banner-slider {
                    margin-top: 2rem;
                }

                .banner-container {
                    display: flex;
                    overflow: hidden;
                }

                .banner-slide {
                    flex: 0 0 33.33%;
                }

                .banner-slide img {
                    width: 100%;
                    height: auto;
                }
            `}</style>
        </>
    )
}
