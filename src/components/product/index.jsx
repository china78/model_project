import styles from './styles.module.scss';
import star from '@/assets/icons/star.png';
import nostar from '@/assets/icons/nostar.png'

export default function Product({ data }) {
  return (
    <div className={styles.product}>
      <div className={styles.imgbox}>
        <img src={data.img} alt="productImg" />
      </div>
      <div className={styles.content}>
        <div className={styles.line1}>
          <div className={styles.name}>{ data.name }</div>
          <div className={styles.star}>
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