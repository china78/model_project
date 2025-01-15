import styles from './index.module.scss';
import CusTitle from '../title';
import titleIcon from '@/assets/icons/lit.png';
import jl from '@/assets/icons/jl.png';
import jr from '@/assets/icons/jr.png';
export default function TrendingProducts () {
  const imgsize = { width: 18 };
  const ricon = (
    <div style={{ width: '36px', cursor: 'pointer' }}>
      <img style={imgsize} src={jl} alt="jl" />
      <img style={imgsize} src={jr} alt="jr" />
    </div>
  )
  return (
    <div className={styles.trendingProducts}>
      <CusTitle
        leftIcon={titleIcon}
        text="热门产品"
        rightIcon={ricon}
      />
    </div>
  )
}