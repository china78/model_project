import { useState } from 'react';
import styles from './index.module.scss';
import logo from '@/assets/icons/logo.png';
import search from '@/assets/icons/search.png';
import shop from '@/assets/icons/shop.png';
import me from '@/assets/icons/me.png';
import { useNavigate } from 'react-router';

export default function Header ({ goPath }) {

  let navigate = useNavigate();

  const [navItems, setNavItems] = useState([
    { id: 1, navName: '首页', path: '/' },
    { id: 2, navName: '好物', path: '/goods' }, 
    { id: 3, navName: '建模', path: '/model' },
    { id: 4, navName: '编程', path: '/code' },
    { id: 5, navName: '最新消息', path: '/news' },
    { id: 6, navName: '联系', path: '/contact' },
  ])
  

  return (
    <div className={styles.header}>
      <div className={styles.leftbox}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.navBox}>
          {
            navItems?.map((nav) => (
              <div
                className={styles.navName}
                key={nav.id}
                onClick={() => goPath(nav.path)}
              >
                {nav.navName}
              </div>
            ))
          }
        </div>
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