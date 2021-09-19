import styles from '../../styles/components/company-details-card.module.scss';
import CompanyCard from './company-card';
import InfoCard from '../Atoms/infoCard';
import { Radar } from 'react-chartjs-2';
 
export default function CompanyDetailsCard({companyInfo}) {
  const data = {
    labels: ['Communication', 'Diversity', 'Self Growth', 'Salary','Fair Promotion','Gender Equality','Open to Relocation'],
    datasets: [
      {
        label: ` customer 1`,
        backgroundColor: '#cea21a47',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40],
      },
    ]
  };
  return (
    <div>
        <div><CompanyCard style={1}/></div>
        <div className={styles.companyDescription}>
          <div  className={styles.chart}>
            <Radar data={data}
              width={'500px'}
              height={'250px'}
            ></Radar>
          </div>
          <div className={styles.companyReview}>
              <InfoCard/>
              <InfoCard/>
              <InfoCard/>
              <InfoCard/>
          </div>
        </div>
    </div>
  )
}
