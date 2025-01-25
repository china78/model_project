import { useState } from 'react';
import styles from './styles.module.scss';


export default function NewsItem({ data }) {
  
  return (
    <div className={styles.newsitem}>
      <div className={styles.mainImgBox}>
        <img src={data.backImg} alt="backImg" />
      </div>
      <div className={styles.contentbox}>
        <div className={styles.title}>{data.title}</div>
        <div className={styles.des}>{data.des}</div>
        <div className={styles.footbox}>
          <div className={styles.iconbox}>
            <img src={data.typeIcon} alt="typeIcon" />
          </div>
          <div className={styles.newsType}>{data.newsType}</div>
        </div>
      </div>
    </div>
  )
}