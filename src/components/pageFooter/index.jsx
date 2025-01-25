import { useState } from 'react';
import styles from './styles.module.scss';

export default function PageFooter() {
  const [pagedata, setPagedata] = useState({
    mainText: "CapyBa",
    pages: [
      {
        id: 0,
        name: 'xxx',
        link: ''
      },
      {
        id: 1,
        name: 'yyyy',
        link: ''
      },
      {
        id:2,
        name: 'zzz',
        link: ''
      }

    ],
    rightText: {
      name: '@cccc',
      link: ''
    }
  })
  return (
    <div className={styles.pageFooter}>
      <div className={styles.leftBox}>
        <div className={styles.mainText}>{pagedata.mainText}</div>
        <div className={styles.pages}>
          {
            pagedata.pages?.map((item) => <div className={styles.textItem} key={item.id}>{item.name}</div>)
          }
        </div>
      </div>
      <div className={styles.rightBox}>{pagedata.rightText.name}</div>
    </div>
  )
}