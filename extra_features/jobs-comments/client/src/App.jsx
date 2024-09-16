import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard'
import CreateJob from './views/CreateJob'
import EditJob from './views/EditJob'
import OneJob from './views/OneJob'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container mt-5'>
      <h1>Jobs Board</h1>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/jobs/new" element={<CreateJob />}/>
        <Route path="/jobs/edit/:id" element={<EditJob />} />
        <Route path="/jobs/:id" element={<OneJob />} />
      </Routes>
    </div>

  )
}

export default App
