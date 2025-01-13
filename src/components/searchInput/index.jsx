import { useState } from 'react';
import styles from './index.module.scss';
import CusInput from './comps/input.jsx';
import searchIcon from '@/assets/icons/search.png';
import CusButton from '../button/index.jsx';
export default function SearchInput () {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.actions}>
      <CusInput
        icon={searchIcon}
        inputValue={inputValue}
        setInputValue={setInputValue}
        placeholder="what are you looking for?"
      />
      <CusButton />
    </div>
  )
}