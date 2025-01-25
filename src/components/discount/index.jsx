import styles from './styles.module.scss';
import { RedButton } from '../Button/index.jsx';

export default function Discount({
  productInfo,
  handleClick
}) {
  return (
    <div className={styles.discount} style={{ backgroundColor: productInfo.backgroundColor }}>
      <div className={styles.name}>{productInfo.name}</div>
      <div className={styles.descript}>{productInfo.descript}</div>
      <div className={styles.iconbox}>
        <div className={styles.imgbox}>
          <img src={productInfo.img} alt="" />
        </div>
        { productInfo.sellIcon && <div className={styles.icon}>{productInfo.sellIcon}折扣</div> }
      </div>
      <RedButton
        text="立即购买"
        width="80%"
        height='48px'
        handleClick={handleClick} />
    </div>
  )
}