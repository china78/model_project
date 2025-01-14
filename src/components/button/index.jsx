import styles from './index.module.scss';

export function RedButton({
  text="搜索",
  width="160px",
  height="66px",
  handleSearch
}) {
  return (
    <button
      className={styles.redButton}
      style={{
        width,
        height
      }}
      onClick={handleSearch}
    >
        {text}
      </button>
  )
}