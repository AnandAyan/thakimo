import Hero from '../components/hero'

export default function Home() {
  const user = {name:'salki'};
  return (
    <div className="app sd">
       <Hero user={user}/>
    </div>
  )
}
