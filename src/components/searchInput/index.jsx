import { useState } from 'react';
import styles from './index.module.scss';
import CusInput from './comps/input.jsx';
import searchIcon from '@/assets/icons/search.png';
import { RedButton } from '../Button/index.jsx';
export default function SearchInput () {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = () => {
    console.log(inputValue)
  }
  return (
    <div className={styles.actions}>
      <CusInput
        icon={searchIcon}
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder="what are you looking for?"
      />
      <RedButton height='54px' handleClick={handleSearch} />
    </div>
  )
}