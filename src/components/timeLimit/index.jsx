import styles from './styles.module.scss';
import useCountdown from '@/hooks/useCountdown';

export default function TimeLimit({ endTime }) {
  const { hours, minutes, seconds } = useCountdown(endTime);

 /**
  * 服务器会传回一个系统截止时间，年月日时分秒
  * "endTime": "2025-01-30T15:30:00Z"
  * 该组件将处理截止时间与当前时间的距离，并倒计时
  */
  return (
    <div className={styles.timelimit}>
      <div className={styles.title}>限时福利！</div>
      <div className={styles.des}>限时优惠～</div>
      {/* 倒计时 */}
      <div className={styles.countdown}>
        {/* 小时 */}
        <div className={styles.timeblock}>
          <div className={styles.blocktime}>{Math.floor(hours / 10)}</div>
          <div className={styles.blocktime2}>{hours % 10}</div>
        </div>
        <div className={styles.mh}>:</div>
        {/* 分 */}
        <div className={styles.timeblock}>
          <div className={styles.blocktime}>{Math.floor(minutes / 10)}</div>
          <div className={styles.blocktime2}>{minutes % 10}</div>
        </div>
        <div className={styles.mh}>:</div>
        {/* 秒 */}
        <div className={styles.timeblock}>
          <div className={styles.blocktime}>{Math.floor(seconds / 10)}</div>
          <div className={styles.blocktime2}>{seconds % 10}</div>
        </div>
      </div>
    </div>
  )
}