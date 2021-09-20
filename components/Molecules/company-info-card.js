import styles from '../../styles/components/company-info-card.module.scss';

export default function CompanyInfoCard() {
   
  return (
    <ul className={styles.companyInfoCard}> 
       <li className={styles.companyInfoCardList}><span className="font-bold">Industry</span>  <span className="font-small">IT related</span></li> 
       <li className={styles.companyInfoCardList}><span className="font-bold">URL</span>  <span className="font-small">https://www.tokhimo.com/</span></li> 
       <li className={styles.companyInfoCardList}><span className="font-bold">Location</span>  <span className="font-small">Kanagwa</span></li> 
       <li className={styles.companyInfoCardList}><span className="font-bold">Employees</span>  <span className="font-small">15</span></li> 
       <li className={styles.companyInfoCardList}><span className="font-bold">Established</span>  <span className="font-small">2018</span></li> 
       <li className={styles.companyInfoCardList}><span className="font-bold">Capital</span>  <span className="font-small">1,754,000 yen</span></li> 
       <li className={styles.companyInfoCardList}><span className="font-bold">Representative</span>  <span className="font-small">Morisaka Shota</span></li> 
    </ul>
  )
}
 