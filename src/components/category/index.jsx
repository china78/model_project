import { useState } from 'react'
import styles from './index.module.scss'
import mu from '@/assets/img/mu.jpeg'
import huo from '@/assets/img/huo.jpeg'
import tu from '@/assets/img/tu.jpeg'
import jin from '@/assets/img/js.jpeg'
import shui from '@/assets/img/sj.jpeg'
import d3 from '@/assets/img/d3.jpeg'
import PictrueFrame from '@/components/pictrueFrame'
export default function Category () {
  const [category, setCategory] = useState([
    { id: 1, name: '木雕', img: mu, wz: 0 },
    { id: 2, name: '火器', img: huo, wz: -6 },
    { id: 3, name: '土制', img: tu, wz: -37 },
    { id: 4, name: '金艺', img: jin, wz: -29 },
    { id: 5, name: '水晶', img: shui, wz: -59 },
    { id: 6, name: '3D打印', img: d3, wz: -23 }
  ])
  const handleClick = (cat) => {
    console.log(cat);
  }
  return (
    <div className={styles.categorys}>
      {/* <div className={styles.title}>类别</div> */}
      <div className={styles.content}>
        {
          category.map((cat) => (
            <PictrueFrame
              key={cat.id}
              imgInfo={cat}
              callback={handleClick}
            />
          ))
        }
      </div>
    </div>
  )
}