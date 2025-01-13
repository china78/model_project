import styles from './index.module.scss';

export default function CusButton({
  backgroundColor="#ed2124",
  text="搜索",
  width="160px",
  height="66px"
}) {
  return (
    <button
      className={styles.redButton}
      style={{
        backgroundColor,
        width,
        height
      }}>
        {text}
      </button>
  )
}