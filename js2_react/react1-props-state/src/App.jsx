import './App.css'
import Header from './components/Header'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      <MovieCard title="Barbie" rating={7} tags={["Pink", "Girls"]}/>
      <MovieCard title="Twister" rating={8} tags={["IsItGood?", "Tornado"]}/>
      <MovieCard title="Alien" rating={9} tags={["Horror", "Scary"]}/>

      {/* <Header />
      <h1 style={{ backgroundColor : "teal"}}>React Demo</h1>
      <button className="btn">Test</button> */}



    </>
  )
}

export default App
