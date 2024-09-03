import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchPokemon from './components/FetchPokemon'
import FetchPokemonOnLoad from './components/FetchPokemonOnLoad'

function App() {

  return (
    <>
      {/* <FetchPokemon /> */}
      <FetchPokemonOnLoad />
    </>
  )
}

export default App
