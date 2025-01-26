import styles from './styles.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import jt from '@/assets/icons/categorys/jt.png'
import { useNavStore } from '@/store/navStore.js';

export default function ColumnNav({ data }) {
  const navigator = useNavigate();
  const { 
    currentGoodsId,
    currentGoodsParentId,
    setCurrentGoodsId,
    setCurrentGoodsParentId
  } = useNavStore();

  const handleParentClick = function(item) {
    if (item.id === 'all') {
      setCurrentGoodsId('')
      navigator('/goods/all');
    }
    if (currentGoodsParentId === item.id) {
      setCurrentGoodsParentId('');
    } else {
      setCurrentGoodsParentId(item.id);
    }
  }

  const handleChildrenItem = function(children) {
    const categoryKey = children.id;
    
    setCurrentGoodsId(categoryKey);
    navigator(`/goods/${categoryKey}`);
  }

  return (
    <div className={styles.columnNav}>
      {
        data?.map((item) => {
          const isCurrentParentId = item.id === currentGoodsParentId;
          const notall = item.id !== 'all';
          const hasChildren = item?.childrens && item?.childrens?.length > 0;
          return (
            <div 
              className={styles.navItem} 
              key={item.id} 
              style={{ 
                backgroundColor: item.id === currentGoodsParentId ? '#f8f8f8' : '#fff' 
              }}
            >
              {/* 父节点 */}
              <div
                key={item.id}
                className={styles.navParent}
                onClick={() => handleParentClick(item)}
              >
                <div className={styles.leftbox}>
                  <div className={styles.parentIconBox}>
                    <img src={item.icon} alt="icon" />
                  </div>
                  <div className={styles.parentName}>{item.name}</div>
                </div>
                {
                  notall && hasChildren && (
                    <img
                      className={styles.jt}
                      style={
                        isCurrentParentId ? 
                          {
                            transform: 'rotate(-90deg)',
                            transition: 'transform 0.3s ease'
                          } : {}
                      }
                      src={jt}
                      alt=""
                    />
                  ) 
                }
              </div>
              {
                item?.childrens && (
                  item?.childrens?.map((children) => {
                    const isCurrentKey = children.id === currentGoodsId;
                    return (
                      <div
                        style={{
                          display: isCurrentParentId ? 'block' : 'none',
                          backgroundColor: isCurrentKey ? '#4292ec' : '',
                          color: isCurrentKey ? '#fff' : '',
                        }}
                        key={`${item.id}-${children.id}`}
                        className={styles.childrenItem}
                        onClick={() => handleChildrenItem(children)}
                      >
                        {children.name}
                      </div>
                    )
                  })
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}