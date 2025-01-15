import styles from './styles.module.scss';

export default function PictrueFrame({ imgInfo, callback }) {
  return (
    <div key={imgInfo.id} className={styles.pictrueFrame} onClick={() => callback(imgInfo)}>
      <div className={styles.name}>{imgInfo.name}</div>
      <div className={styles.imgbox}>
        <img src={imgInfo.img} alt="categoryIcon" style={{ marginTop: imgInfo.wz }} />
      </div>
    </div>
  )
}