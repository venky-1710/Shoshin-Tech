import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'
import Container from './components/Hero/Container'

function App() {
  return (
    <>
      <div className="App">
      <div className='application'>
        <div className='section1'>
          <Dashboard />
        </div>
        <div className='section2'>
          <div className='nav'>
            <Header />
          </div>
          <div className='cont'>
            <Container />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
