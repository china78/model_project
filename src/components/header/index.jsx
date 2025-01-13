import { useState } from 'react';
import styles from './index.module.scss';
import logo from '@/assets/icons/logo.png';
import search from '@/assets/icons/search.png';
import shop from '@/assets/icons/shop.png';
import me from '@/assets/icons/me.png';

export default function Header () {

  const [navItems, setNavItems] = useState([
    { id: 1, navName: '首页', pathTo: '/' },
    { id: 2, navName: '产品', pathTo: '/product' },
    { id: 3, navName: '建模', pathTo: '/model' },
    { id: 4, navName: '编程', pathTo: '/code' },
    { id: 5, navName: '最新消息', pathTo: '/news' },
    { id: 6, navName: '联系', pathTo: '/contact' },
  ])
  

  return (
    <div className={styles.header}>
      <div className={styles.leftbox}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        {
          navItems?.map((nav) => (
            <div className={styles.navName} key={nav.id}>{nav.navName}</div>
          ))
        }
      </div>
      <div className={styles.rightbox}>
        <div className={styles.icons}>
          <img src={search} alt="搜索" />
        </div>
        <div className={styles.icons}>
          <img src={shop} alt="购物车" />
        </div>
        <div className={styles.icons}>
          <img src={me} alt="个人中心" />
        </div>
      </div>
    </div>
  )
}