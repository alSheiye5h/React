import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProfWindow from './components/ProfWindow'
import profileImage from './assets/images.jpeg'


function App() {
  let user = {
    img: profileImage,
    username: "alSheiy5h",
    role: "admin",
    bio: "creating random code, just remembring the react skills",
    contributions: 28,
  }

  return (
    <>
      <ProfWindow user={user}/>
    </>
  )
}

export default App
