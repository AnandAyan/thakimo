import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from '../styles/components/hero.module.scss'
import CompanyCard from './Molecules/company-card';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function PopularCompanies({user}) {
  return (
    <div >
      <Tabs>
        <TabList>
          <Tab>Popular Companies</Tab>
          <Tab>Ranking</Tab>
        </TabList>

        <TabPanel>
          <Carousel responsive={responsive}>
            <div><CompanyCard allowClick ='true'/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
            <div><CompanyCard/></div>
          </Carousel>
          
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  )
}
