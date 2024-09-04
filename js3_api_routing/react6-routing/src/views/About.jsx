import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <fieldset>
      <legend>About component</legend>
      <h1 style={{ color: "blue" }}>About Component</h1>
      <button onClick={()=>navigate("/")} >Home </button>
      <button onClick={()=>navigate(-1)}> Back</button>
    </fieldset>
  )
}

export default About