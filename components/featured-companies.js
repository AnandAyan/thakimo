import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../styles/components/hero.module.scss'
import CompanyDetailsCard from './Molecules/company-details-card';

export default function FeaturedCompanies({user}) {
  return (
    <div >
      <Tabs>
        <TabList>
          <Tab>Popular Companies</Tab>
        </TabList>

        <TabPanel>
          <CompanyDetailsCard/>
        </TabPanel>
         
      </Tabs>
    </div>
  )
}
