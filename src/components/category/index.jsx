import { useState } from 'react'
import styles from './index.module.scss'
import mu from '@/assets/img/mu.jpeg'
import huo from '@/assets/img/huo.jpeg'
import tu from '@/assets/img/tu.jpeg'
import jin from '@/assets/img/js.jpeg'
import shui from '@/assets/img/sj.jpeg'
import d3 from '@/assets/img/d3.jpeg'
export default function Category () {
  const [category, setCategory] = useState([
    { id: 1, name: '木雕', img: mu, wz: 0 },
    { id: 2, name: '火器', img: huo, wz: -6 },
    { id: 3, name: '土制', img: tu, wz: -37 },
    { id: 4, name: '金艺', img: jin, wz: -29 },
    { id: 5, name: '水晶', img: shui, wz: -59 },
    { id: 6, name: '3D打印', img: d3, wz: -23 }
  ])
  return (
    <div className={styles.category}>
      <div className={styles.title}>类别</div>
      <div className={styles.content}>
        {
          category.map((cat) => (
            <div key={cat.id} className={styles.category}>
              <div className={styles.name}>{cat.name}</div>
              <div className={styles.imgbox}>
                <img src={cat.img} alt="categoryIcon" style={{ marginTop: cat.wz }} />
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}