import styles from './styles.module.scss';
import Header from '@/components/header';
import Banner from '@/components/banner';
import Category from '@/components/category';
import SpecialOffers from '@/components/specialOffers';
import TrendingProducts from '@/components/trendingProducts';
import BrowseByCategory from '@/components/browseByCategory';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Banner />
      {/* 分类 */}
      <Category />
      <div className="flex">
        {/* 特别优惠 */}
        <SpecialOffers />
        <div className='contentRightBox'>
          {/* 热门产品 */}
          <TrendingProducts />
          {/* 按类别浏览 */}
          <BrowseByCategory />
        </div>
      </div>
      {/* 消息 */}
      {/* <News /> */}
    </div>
  )
}