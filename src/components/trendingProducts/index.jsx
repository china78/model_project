import styles from './index.module.scss';
import CusTitle from '../Title';
import titleIcon from '@/assets/icons/lit.png';
import jl from '@/assets/icons/jl.png';
import jr from '@/assets/icons/jr.png';
import { useState } from 'react';
import zw from '@/assets/img/zw.png';
import Product from '@/components/Product';
export default function TrendingProducts () {
  const imgsize = { width: 18 };
  const ricon = (
    <div style={{ width: '36px', cursor: 'pointer' }}>
      <img style={imgsize} src={jl} alt="jl" />
      <img style={imgsize} src={jr} alt="jr" />
    </div>
  )
  const [products, setProducts] = useState([
    {
      id: 0,
      img: zw,
      name: '3D打印狗雕像',
      star: true,
      price: 8.99,
      oldPrice: 13.99
    },
    {
      id: 1,
      img: zw,
      name: '3D打印鸡雕像',
      star: true,
      price: 8.99,
      oldPrice: 13.99
    },
    {
      id: 2,
      img: zw,
      name: '3D打印狗床',
      star: false,
      price: 6.99,
      oldPrice: 13.99
    },
    {
      id: 3,
      img: zw,
      name: '找到您最喜欢的3d打印',
      star: true,
      price: 11.99,
      oldPrice: 13.99
    },
    {
      id: 4,
      img: zw,
      name: '水果小雕像',
      star: false,
      price: 7.99,
      oldPrice: 12.99
    },
    {
      id: 5,
      img: zw,
      name: '玩具公仔',
      star: true,
      price: 6.99,
      oldPrice: 11.99
    }
  ])
  
  return (
    <div className={styles.trendingProducts}>
      <CusTitle
        leftIcon={titleIcon}
        text="热门产品"
        rightIcon={ricon}
      />
      <div className={styles.productBox}>
        {
          products.map((item) => (
            <Product
              key={item.id}
              data={item}
            />
          ))
        }
      </div>
    </div>
  )
}