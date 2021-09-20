import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CompanyCard from '../components/Molecules/company-card';
import CompanyDetailsCard from '../components/Molecules/company-details-card';
import CompanyInfoCard from '../components/Molecules/company-info-card';
import styles from '../styles/company-details.module.scss'
export default function Home() {
  const user = {name:'company-details'};
  return (
    <div className="companyDetails">
    <div className={`${styles.companyDetails}`}>
      <CompanyCard style={1} />
    </div>
    <div className={styles.companyDetailCard}>
      <Tabs>
        <TabList  className={styles.tablist}>
          <Tab  className={styles.tabs}>TOP</Tab>
          <Tab className={styles.tabs}>Review(155)</Tab>
          <Tab className={styles.tabs}>Salary</Tab>
          <Tab className={styles.tabs}>Jobs (2)</Tab>
        </TabList>
       
        <div className="container">
        <TabPanel>
          <CompanyDetailsCard  isCompanyCard={false}/>
        </TabPanel>
        <TabPanel>
          <CompanyCard style={1} />
        </TabPanel>
        <TabPanel>
          <CompanyCard style={1} />
        </TabPanel>
        <TabPanel>
          <CompanyCard style={1} />
        </TabPanel>
        </div>
       </Tabs>
    </div>
     <div className={styles.detailReview}>
        <div className={styles.detailReviewList}>

        </div>
        <div className={styles.companyInfo}>
          <h2 className="text-center">Corporate information</h2>
            <CompanyInfoCard/>
          <h2 className="text-center">Companies in the 
same Industry</h2>
            <div><CompanyCard style={false}/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
        </div>
     </div>
    </div>
  );
} 