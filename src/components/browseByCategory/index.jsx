import styles from './index.module.scss';
import titleIcon from '@/assets/icons/lit.png';
import CusTitle from '../title';
export default function BrowseByCategory () {
  return (
    <div className={styles.browseByCategory}>
      <CusTitle
        leftIcon={titleIcon}
        text="按小类别浏览"
      />
    </div>
  )
}