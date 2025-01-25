import styles from './styles.module.scss';
import { useState } from 'react';
import moreIcon from '@/assets/icons/more.png';
import zw from '@/assets/img/zw.png';
import NewsItem from '../newsItem';

export default function News () {
  const [news, setNews] = useState([
    {
      id: 0,
      backImg: zw,
      title: '如何制作自己的3D打印小雕像的5个技巧',
      des: '在本文中，我们将为您提供一些有关如何在家中制作自己的3D打印小雕像的建议',
      typeIcon: zw,
      newsType: '木制品'
    },
    {
      id: 1,
      backImg: zw,
      title: '如何制作自己的3D打印小雕像的5个技巧',
      des: '在本文中，我们将为您提供一些有关如何在家中制作自己的3D打印小雕像的建议',
      typeIcon: zw,
      newsType: '土制品'
    },
    {
      id: 2,
      backImg: zw,
      title: '如何制作自己的3D打印小雕像的5个技巧',
      des: '在本文中，我们将为您提供一些有关如何在家中制作自己的3D打印小雕像的建议',
      typeIcon: zw,
      newsType: '金属制品'
    },
  ])
  return (
    <div className={styles.news}>
      <div className={styles.title}>
        <div className={styles.text}>阅读我们的最新消息</div>
        <div className={styles.morebox}>
          <img src={moreIcon} alt="more" />
          <div>查看更多</div>
        </div>
      </div>
      <div className={styles.newsBox}>
        {
          news?.map((item) => (
            <NewsItem key={item.id} data={item} />
          ))
        }
      </div>
    </div>
  )
}