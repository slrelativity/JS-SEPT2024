import './App.css'
import {Routes, Route, Link} from "react-router-dom";
import Header from './components/Header';
import Home from './views/Home';
import About from './views/About';
import KeywordPage from './views/KeywordPage';
import LocationPage from './views/LocationPage';

const NotFound = ()=>{
  return(
    <fieldset>
      <legend>NotFound</legend>
      <h1>404 Not found! Wrong route</h1>
    </fieldset>
  )
}

function App() {
  return (
    <>
     <Header />
     <p>
        <Link to="/">Home</Link> |
        <Link to={`/about`}>About</Link>|
        <Link to={`/keyword`}>Search for a keyword</Link>
     </p>

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/keyword" element={<KeywordPage />} />
        <Route path="/location/:city/:color" element={<LocationPage/>} />
        <Route path="*" element={<NotFound />}/>
     </Routes>
    </>
  )
}

export default App
