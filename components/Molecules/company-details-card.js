import styles from '../../styles/components/company-details-card.module.scss';
import CompanyCard from './company-card';
import InfoCard from '../Atoms/infoCard';
import { Radar } from 'react-chartjs-2';
import diverity from '../../assets/diverity.png'
import Foreign from '../../assets/Foreign.png'
import income from '../../assets/income.png'
import time from '../../assets/time.png'
 
export default function CompanyDetailsCard({isCompanyCard = true}) {
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
  const infoDiverity = {
    logo : diverity,
    info : {
      label :'Diverity',
      number: 3.4,
      misc:''
    }
  }
  
  const foreign = {
    logo : Foreign,
    info : {
      label :'% Foreign Nationals',
      number: '24%',
      misc:''
    }
  }
  const incomeInfo = {
    logo : income,
    info : {
      label :'Avg. Income',
      number: '6,4000,000%',
      misc:'Yen'
    }
  }
  const time = {
    logo : income,
    info : {
      label :'Avg. Overtime',
      number: '54 Hours',
      misc:'Month'
    }
  }
  return (
    <div>
        <div>{isCompanyCard ? <CompanyCard style={1}/> : ''}</div>
        <div className={styles.companyDescription}>
          <div  className={styles.chart}>
            <Radar data={data}
              width={'500px'}
              height={'250px'}
            ></Radar>
          </div>
          <div className={styles.companyReview}>
              <InfoCard icon={infoDiverity.logo} info={infoDiverity.info} />
              <InfoCard icon={foreign.logo} info={foreign.info} />
              <InfoCard icon={incomeInfo.logo} info={incomeInfo.info}/>
              <InfoCard icon={time.logo} info={time.info}/>
              <div className="cardStyle">
                <h3>Pick up Review</h3>
              <p>This company is abc abc. This company is abc abc. This company is abc abc. This company is abc abc. This company is abc abc. This company is abc abc. This company is abc abc. This company is abc abc. This company is abc abc. This company is abc abc</p>
              </div>
          </div>
        </div>
    </div>
  )
}
