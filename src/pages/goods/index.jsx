import styles from './styles.module.scss';
import { Outlet } from "react-router";
import { useState } from 'react';
import ColumnNav from '@/components/ColumnNav';
import litIcon from '@/assets/icons/lit.png'
import categoryHeader from '@/assets/icons/category.png';

export default function Goods() {
  // Wood Fire Earth Gold Water
  const [goodsNav, setGoodsNav] = useState([
    {
      id: 'all',
      name: '所有',
      icon: litIcon,
      type: 'all'
    },
    {
      id: 'wood',
      name: '木雕',
      icon: litIcon,
      type: 'wood',
      childrens: [
        {
          id: 'wood-bj',
          name: '木雕摆件',
          type: 'bj'
        },
        {
          id: 'wood-fz',
          name: '佛珠',
          type: 'fz'
        },
      ]
    },
    {
      id: 'fire',
      name: '火器',
      icon: litIcon,
      type: 'fire',
      childrens: [
        {
          id: 'fire-lz',
          name: '蜡烛',
          type: 'lz'
        },
      ]
    },
    {
      id: 'earth',
      name: '土制',
      icon: litIcon,
      type: 'earth',
      childrens: [
        {
          id: 'earth-ch',
          name: '茶壶',
          type: 'ch'
        },
      ]
    },
    {
      id: 'gold',
      name: '金艺',
      icon: litIcon,
      type: 'gold',
      childrens: [
        {
          id: 'gold-jz',
          name: '戒指',
          type: 'jz'
        },
      ]
    },
    {
      id: 'water',
      name: '水晶',
      icon: litIcon,
      type: 'water',
      childrens: [
        {
          id: 'water-sl',
          name: '手链',
          type: 'sl'
        },
      ]
    },
    {
      id: '3d',
      name: '3D打印',
      icon: litIcon,
      type: '3d',
      childrens: [
        {
          id: '3d-sb',
          name: '手办',
          type: 'sb'
        },
        {
          id: '3d-jy',
          name: '家用',
          type: 'jy'
        },
      ]
    },
  ])
  return (
    <div className={styles.goods}>
      {/* 左侧导航 */}
      <div className={styles.columnNavBox}>
        <div className={styles.cateHeader}>
          <div className={styles.iconbox}>
            <img src={categoryHeader} alt="categoryHeader" />
          </div>
          <div>分类</div>
        </div>
        <ColumnNav data={goodsNav} />
      </div>
      {/* 动态路由 */}
      <div className={styles.outlet}>
        <Outlet />
      </div>
    </div>
  )
}