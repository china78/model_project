import styles from './styles.module.scss';
import star from '@/assets/icons/star.png';
import nostar from '@/assets/icons/nostar.png'
import { useEffect, useState } from 'react';
import axios from 'axios'

export default function Product({ data }) {
  const [isHover, setIsHover] = useState(false);
  const onMouseEnt = function() {
    setIsHover(true);
  }
  const onMouseOut = function() {
    setIsHover(false);
  }
  const handleStarClick = function() {
    // 这里要调接口的
    axios.get('/user?ID=12345')
    .then(function (response) {
      // 处理成功情况
      console.log(response);
    })
    .catch(function (error) {
      // 处理错误情况
      console.log(error);
    })
    .finally(function () {
      // 总是会执行
    });
  }
  return (
    <div className={styles.product} onMouseEnter={onMouseEnt} onMouseLeave={onMouseOut}>
      {/* 购物车蒙版 */}
      {
        isHover && (
          <div className={styles.shopcar}>
            <div className={styles.text}>添加到购物车</div>
          </div>
        )
      }
      <div className={styles.imgbox}>
        <img src={data.img} alt="productImg" />
      </div>
      <div className={styles.content}>
        <div className={styles.line1}>
          <div className={styles.name}>{ data.name }</div>
          <div className={styles.star} onClick={handleStarClick}>
            {
              data.star ? <img src={star} alt="star" /> : <img src={nostar} alt="nostar" />
            }
          </div>
        </div>
        <div className={styles.line2}>
          <div className={styles.price}>¥{ data.price }</div>
          <div className={styles.oldPrice}>{ data.oldPrice }</div>
        </div>
      </div>
    </div>
  )
}