import React from 'react';
import './App.css'
import Logo from './components/logo'
import Panel from './components/panel'
import Legend from './components/legend';
import ZoomableContainer from './components/zoomableContainer';
import blueprint from './assets/blueprint.png';

function App() {
  return (
    <div className="bg-primary h-screen w-full p-8 flex flex-row gap-8">
      <div className="flex flex-col w-1/4 gap-8">
        <Logo />
        <Panel />
      </div>
      <div className="flex flex-col w-3/4 gap-8">
        <div className="flex flex-row gap-4 w-full">
          <Legend />
          <div className="h-full bg-secondary w-auto flex items-center justify-center px-4 rounded-xl drop-shadow-md cursor-pointer">
            <h1 className="font-bold text-2xl text-white text-center">Add Room</h1>
          </div>
        </div>
        <ZoomableContainer imageSrc={blueprint} />
      </div>
    </div>
  )
}

export default App
