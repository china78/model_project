import styles from './index.module.scss';

export default function CusTitle ({ text, leftIcon, rightIcon }) {
  return (
    <div className={styles.cusTitle}>
      <div className={styles.flex}>
        <img src={leftIcon} alt="leftIcon" />
        {text}
      </div>
      { rightIcon }
    </div>
  )
}