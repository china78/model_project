import './App.css';
import Header from ''

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
      <News />
    </div>
  );
}

export default App;
