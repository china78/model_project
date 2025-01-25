import styles from './index.module.scss';
import titleIcon from '@/assets/icons/lit.png';
import CusTitle from '../title';
import { useState } from 'react';
import zw from '@/assets/img/zw.png';
import LitCategory from '../litCategory'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

export default function BrowseByCategory () {
  const [litcatgorys, setLitcatgorys] = useState([
    {
      id: 0,
      backgroundImage: zw,
      title: '动物木雕',
      des: '精致有品位有意义的动物木雕'
    },
    {
      id: 1,
      backgroundImage: zw,
      title: '茶壶',
      des: '有品质有设计感的高端茶壶'
    },
    {
      id: 2,
      backgroundImage: zw,
      title: '蜡烛',
      des: '有品质有设计感的蜡烛'
    },
    {
      id: 3,
      backgroundImage: zw,
      title: '手链',
      des: '有品质有设计感的手链'
    },
    {
      id: 4,
      backgroundImage: zw,
      title: '佛珠',
      des: '有品质有设计感的佛珠'
    },
    {
      id: 5,
      backgroundImage: zw,
      title: '手办',
      des: '有品质有设计感的手办'
    },
  ])
  return (
    <div className={styles.browseByCategory}>
      <CusTitle
        leftIcon={titleIcon}
        text="按小类别浏览"
      />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {
          litcatgorys?.map((item) => (
            <SwiperSlide key={item.id}>
              <LitCategory key={item.id} data={item}/>
            </SwiperSlide>
          
          ))
        }
      </Swiper>
    </div>
  )
}