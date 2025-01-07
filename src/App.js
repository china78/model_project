import './App.css';
import Header from '@/components/header';
import Banner from '@/components/banner';
import Category from '@/components/category';
import SpecialOffers from '@/components/special_offers';
import TrendingProducts from '@/components/trending_products';
import BrowseByCategory from '@/components/browse_by_category';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* 分类 */}
      <Category />
      <div>
        {/* 特别优惠 */}
        <SpecialOffers />
        <div>
          {/* 热门产品 */}
          <TrendingProducts />
          {/* 按类别浏览 */}
          <BrowseByCategory />
        </div>
      </div>
      {/* 消息 */}
      {/* <News /> */}
    </div>
  );
}

export default App;

