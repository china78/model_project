import { useState } from 'react';
import styles from './index.module.scss';
import mainImg from '@/assets/img/main.jpeg';
import SearchInput from '@/components/searchInput';
export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.title}>在 CapyBa 上发现最有品质、设计、态度的 Five Elements 宝贝</div>
        <div className={styles.descript}>按类别、品牌或最新产品购物！</div>
        {/* 搜索 */}
        <SearchInput />
      </div>
      <div className={styles.mainImg}>
        <img src={mainImg} alt="主图" />
      </div>
    </div>
  )
}