import styles from './styles.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import jt from '@/assets/icons/categorys/jt.png'

export default function ColumnNav({ data }) {
  const [currentParentId, setCurrentParentId] = useState('all');
  const [currentKey, setCurrentKey] = useState('');
  const navigator = useNavigate();

  const handleParentClick = function(item) {
    if (item.id === 'all') {
      navigator('/goods/all');
    }
    if (currentParentId === item.id) {
      setCurrentParentId('');
    } else {
      setCurrentParentId(item.id);
    }
  }

  const handleChildrenItem = function(children) {
    const categoryKey = children.id;
    
    setCurrentKey(categoryKey);
    navigator(`/goods/${categoryKey}`);
  }

  return (
    <div className={styles.columnNav}>
      {
        data?.map((item) => {
          const isCurrentParentId = item.id === currentParentId;
          const notall = item.id !== 'all';
          const hasChildren = item?.childrens && item?.childrens?.length > 0;
          return (
            <div 
              className={styles.navItem} 
              key={item.id} 
              style={{ 
                backgroundColor: item.id === currentParentId ? '#f8f8f8' : '#fff' 
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
                    const isCurrentKey = children.id === currentKey;
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