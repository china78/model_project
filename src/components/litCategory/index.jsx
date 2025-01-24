// 小类别组件
import styles from './styles.module.scss';
import { RedButton } from '../button/index.jsx';
export default function LitCategory({ data, handleClick }) {
  // 背景图、标题、描述、
  return (
    <div 
      className={styles.litCategory}
      style={{ backgroundImage: `url(${data.backgroundImage})` }}
    >
      <div className={styles.title}>{ data.title }</div>
      <div className={styles.des}>{ data.des }</div>
      <RedButton
        text="立即购买"
        width="150px"
        height='50px'
        handleClick={handleClick} />
    </div>
  )
}