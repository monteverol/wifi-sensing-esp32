import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logo from './components/logo'
import Panel from './components/panel'

function App() {
  return (
    <div className="bg-primary h-screen w-full p-8 flex flex-row gap-8">
      <div className="flex flex-col w-1/4 gap-8">
        <Logo />
        <Panel />
      </div>
      <div className="bg-white rounded-xl h-full w-3/4 drop-shadow-md">

      </div>
    </div>
  )
}

export default App
