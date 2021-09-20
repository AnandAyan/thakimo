import styles from '../../styles/components/company-card.module.scss';
import Image from 'next/image'
import logo from '../../assets/Tokhimo_Logo_Final8.png'
import Rating from '../Atoms/ratings';
import { useRouter } from 'next/router';

export default function CompanyCard({style = 0,allowClick = false}) {
  const router = useRouter();
  const viewDetailsPage = () => {
    if (!allowClick) {
      return false;
    }
    router.push('/company-details')
  }
  const styleType = style ? styles.flex : styles.flexColumn;
  return (
    <div className={style ? styles.flex : styles.flexColumn} onClick = {viewDetailsPage}> 
        <a className="navbar-brand"><Image src={logo} alt="Tokhimo" /></a>
        <p>Tokhimo Inc.</p>
        <Rating/>
        <p>Total Reviews (24)</p>
    </div>
  )
}
 