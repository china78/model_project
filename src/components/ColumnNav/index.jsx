import styles from './styles.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function ColumnNav({ data }) {
  const [currentParentId, setCurrentParentId] = useState('all');
  const [currentKey, setCurrentKey] = useState('');
  const navigator = useNavigate();

  const handleParentClick = function(item) {
    console.log('handleParentClick: ', item.id)
    setCurrentParentId(item.id)
    if (item.id === 'all') {
      navigator('/goods');
    }
  }

  const handleChildrenItem = function(children) {
    const categoryKey = children.id;
    
    setCurrentKey(categoryKey);
    navigator(`/goods/${categoryKey}`);
  }

  const isHidden = (item) => {
    return item.id === currentParentId ? 'block' : 'none';
  }

  return (
    <div className={styles.columnNav}>
      {
        data?.map((item) => (
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
              <div className={styles.parentIconBox}>
                <img src={item.icon} alt="icon" />
              </div>
              <div className={styles.parentName}>{item.name}</div>
            </div>
            {
              item?.childrens && (
                item?.childrens?.map((children) => (
                  <div
                    style={{ display: isHidden(item) }}
                    key={`${item.id}-${children.id}`}
                    className={styles.childrenItem}
                    onClick={() => handleChildrenItem(children)}
                  >
                    {children.name}
                  </div>
                ))
              )
            }
          </div>
        ))
      }
    </div>
  )
}