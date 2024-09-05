import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderForm from './components/HeaderForm'
import PeoplePage from './views/PeoplePage'
import ShowPage from './views/ShowPage'
import {Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
     <HeaderForm />
      <Routes>
        <Route path="/people/:id" element={<PeoplePage/>} />
        <Route path="/shows/:id" element={<ShowPage />} />
      </Routes>
    </>
  )
}

export default App
