import React from 'react'
import About from "./Home/About";
import Contactus from "./Home/Contactus";
import Why from "./Home/Why";
import Managers from "./Home/Managers"
import Footer from "./Home/Footer";

import Header from "./Home/Header";
const Home = () => {
  return (
  <>
  <Header/>
   <About/> 
  <Managers/> 
  <Why/>
  <Contactus/>
  <Footer/>  
  </>  
  )
}

export default Home;