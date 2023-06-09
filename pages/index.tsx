import HomeTop from './base/HomeTop';
import GetProducts from './catalog/product/productList/GetProducts';

const HomePage = () => {
  return (
    <>
      <div className="homepage-container">
        <HomeTop />
        <GetProducts />
      </div>

      <style jsx>{`
                .homepage-container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
    </>
  );
};

export default HomePage;