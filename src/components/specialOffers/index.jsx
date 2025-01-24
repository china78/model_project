import styles from './index.module.scss';
import titleIcon from '@/assets/icons/lit.png';
import CusTitle from '../title';
import Discount from '../discount';
import { useState } from 'react';
import zw from '@/assets/img/zw.png';
import TimeLimit from '../timeLimit';
export default function SpecialOffers () {
  const [discounts, setDiscounts] = useState([
    { 
      id: 1, 
      name: '3D打印雕像', 
      descript: '由3D Printing',
      img: zw,
      sellIcon: '30%',
      backgroundColor: '#e6e7eb'
    },
    { 
      id: 2, 
      name: '新品上市', 
      descript: '了解我们最新的 3D',
      img: zw,
      sellIcon: '20%',
      backgroundColor: '#f8f8f8'
    }
  ])
  
  return (
    <div className={styles.specialOffers}>
      <CusTitle
        leftIcon={titleIcon}
        text="特别优惠"
      />
      {
        discounts.map((item) => (
          <Discount key={item.id} productInfo={item} />
        ))
      }
      <TimeLimit endTime="2025-01-24T15:42:18"  />
    </div>
  )
}