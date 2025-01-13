import styles from './input.module.scss';

export default function CusInput ({ 
  icon, 
  inputValue,
  setInputValue,
  placeholder
}) {
  const handleSearch = function(event) {
    setInputValue(event.target.value);
    console.log('value', event.target.value)
  }

  return (
    <div className={styles.iptbox}>
      <input
        type="text"
        className={styles.ipt} 
        value={inputValue}
        onChange={handleSearch}
        placeholder={placeholder} />
      { icon && <img className={styles.icon} src={icon} alt="icon" /> }
    </div>
  )
}