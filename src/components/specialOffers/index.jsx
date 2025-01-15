import styles from './index.module.scss';
import titleIcon from '@/assets/icons/lit.png';
import CusTitle from '../title';
export default function SpecialOffers () {
  return (
    <div className={styles.specialOffers}>
      <CusTitle
        leftIcon={titleIcon}
        text="特别优惠"
      />
    </div>
  )
}