import './App.css'
import Post from './components/Post'
import { useState } from "react";

function App() {
  const [count , setCount] = useState(0);

  const alertMe = () => {
    alert("Hi, me!");
  }

  const alertSomeone = (name) => {
    alert(`Hi, ${name}!`);
  }

  return (
    <>
      <h1>Event handler</h1>
      <button onClick={() => alert("Hi!")}>Alert hi!</button>
      <button onClick={alertMe}>Alert me!</button>
      <button onClick={() => alertSomeone("Pepper")}>Alert Pepper</button>

      <input name="hobby" type="text" onChange={(e) => console.log(e.target.value)} />

      <h1>State</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>setCount(count+1)}>Add count</button>
      <Post title="First React app!" size={28} />
      <Post title="My favorite food!" size={38} />
      <Post title="Want some icecream" size={20} />
    </>
  )
}

export default App
