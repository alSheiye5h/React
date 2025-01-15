import Header from './compo/Header'
import Footer from './compo/Footer'
import Card from './compo/Card'
import List from './compo/List'


function App() {

  let user = {
    name: "alSheiye5h",
    bio: "anything for the bio",
    rank: 152,
    payed: false,
  }

  return (
    <>
    <Card {...user}/>
    <List/>
    </>
    )
}

export default App





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

/* <>
<div>
  <a href="https://vite.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://react.dev" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>
    count is {count}
  </button>
  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p>
</> */