import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import '../src/style.css'
import About from '..pages/About';
import Pricing from '..pages/Pricing';
import Home from '..pages/Home';
import { Component } from 'react';
import { Route,Routes } from 'react-router-dom';

function App() {
  // console.log(window.location);
  // switch (window.location.pathname) {
    
  //   case "/":
  //     Component = Home
  //     break;

  //   case "/pricing":
  //     Component = Pricing
  //     break;
  
  //   case "/about":
  //     Component = About
  //     break;
      
  //   default:
  //     break;
  // }
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/pricing' element = {<Pricing/>}/>
      <Route path='/about' element = {<About/>}/>
    </Routes>
    </>
  );
}

export default App;
 