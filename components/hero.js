import styles from '../styles/components/hero.module.scss'

export default function Hero({user}) {
  return (
    <div className={styles.hero}>
      <h1>Tell Me {user.name}</h1>
      <p>-Company Review Platform for Global Talent-</p>
      <input type='search' className={styles.searchInput} placeholder='Search by Company Name'/>
      <a href='#'>Browse Companies</a>
    </div>
  )
}
