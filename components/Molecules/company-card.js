import styles from '../../styles/components/company-card.module.scss';
import Image from 'next/image'
import logo from '../../assets/Tokhimo_Logo_Final8.png'
import Rating from '../Atoms/ratings';

export default function CompanyCard({style = 0}) {
  return (
    <div className={style ? styles.flex : ''}> 
        <a className="navbar-brand" href="#"><Image src={logo} alt="Tokhimo" /></a>
        <p>Tokhimo Inc.</p>
        <Rating/>
        <p>Total Reviews (24)</p>
    </div>
  )
}
 