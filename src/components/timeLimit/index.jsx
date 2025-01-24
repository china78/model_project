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
      <div className={styles.title}></div>
      <div className={styles.des}></div>
      {/* 倒计时 */}
      <div className={styles.countdown}>
        {/* 小时 */}
        <div>{Math.floor(hours / 10)}</div>
        <div>{hours % 10}</div>
        <div>:</div>
        {/* 分 */}
        <div>{Math.floor(minutes / 10)}</div>
        <div>{minutes % 10}</div>
        <div>:</div>
        {/* 秒 */}
        <div>{Math.floor(seconds / 10)}</div>
        <div>{seconds % 10}</div>
      </div>
    </div>
  )
}