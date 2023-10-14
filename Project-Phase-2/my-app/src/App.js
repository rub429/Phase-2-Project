import './App.css';
import Navbar from './Navbar';
import '../src/style.css'
import About from './pages/About';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
  
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/pricing' element = {<Pricing/>}/>
      <Route path='/about' element = {<About/>}/>
    </Routes>
    </>
  );

export default App;
 