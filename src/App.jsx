import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import Latest from './Components/Latest';
import Previous from './Components/Previous';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';



const App = () => {
  return (
    <>
      <div className="App  text-white ">
      <Navbar/>
      <Main/>
      <Latest/>
      <Previous/>
      <Reviews/>
      <Footer/>
      </div>
    </>
  )
}

export default App