import styles from './styles.module.scss';
import Banner from '@/components/Banner';
import Category from '@/components/Category';
import SpecialOffers from '@/components/SpecialOffers';
import TrendingProducts from '@/components/TrendingProducts';
import BrowseByCategory from '@/components/BrowseByCategory';
import News from '@/components/News';
import PageFooter from '@/components/PageFooter';

export default function Home() {
  return (
    <div className={styles.home}>
      <Banner />
      {/* 分类 */}
      <Category />
      <div className={styles.mainContent}>
        {/* 特别优惠 */}
        <SpecialOffers />
        <div className={styles.contentRightBox}>
          {/* 热门产品 */}
          <TrendingProducts />
          {/* 按类别浏览 */}
          <BrowseByCategory />
        </div>
      </div>
      {/* 消息 */}
      <News />
      {/* footer */}
      <PageFooter />
    </div>
  )
}