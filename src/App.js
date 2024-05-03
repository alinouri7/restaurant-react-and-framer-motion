import React from 'react';
import { Element } from 'react-scroll';
 import {BrowserRouter as Router , Route, Switch , useNavigate, Routes } from 'react-router-dom'
// import components
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import Reservation from './components/Reservation';
import Footer from './components/Footer';
 
 
const App = () => {
  
  return (
    <div className='h-full bg-pattern bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
     <Element name="home">  <Hero  /></Element>
     <Element name="about">  <About  /></Element>
     <Element name="menu">  <Menu  /></Element>
     <Element name="team">  <Team  /></Element>
     <Element name="testmonials">  <Testimonial  /></Element>
     <Element name="reserve">  <Reservation  /></Element>
     <Element name="contact"  >  <Footer  /></Element>
      {/* <div className='h-[380px]  md:h-[370px]'></div> */}
    
        
    </div>
  );
};

export default App;
