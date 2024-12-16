import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'


function App(){
  return (
    <>
      <h3>Welcome Page</h3>
      <br /><br />
      <Link to="/login" className='btn btn-outline-success'>Login</Link>
      <Link to="/register" className='btn btn-outline-primary'>register</Link>
    </>
  )
}

export default App
