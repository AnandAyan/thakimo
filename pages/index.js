import Hero from '../components/hero';
import PopularCompanies from '../components/popular-companies';
import FeaturedCompanies from '../components/featured-companies';

export default function Home() {
  const user = {name:'Senpai'};
  return (
    <div className="app sd">
       <Hero user={user}/>
        <div className='container home'>
          <PopularCompanies/>
          <FeaturedCompanies/>
      </div>
    </div>
  )
}
