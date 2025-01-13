import { useState } from 'react';
import styles from './index.module.scss';
import mainImg from '@/assets/img/main.jpeg';
export default function Banner () {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.title}>在 Print3D Mall 上发现最好的3D打印产品</div>
        <div className={styles.descript}>按类别、品牌或最新产品购物！</div>
        {/* 搜索 */}

      </div>
      <div className={styles.mainImg}>
        <img src={mainImg} alt="主图" />
      </div>
    </div>
  )
}