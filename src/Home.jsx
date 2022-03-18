import React from 'react'
import About from "./About";
import Contactus from "./Contactus";
import Why from "./Why";
import Managers from "./Managers"
import Footer from "./Footer";
import Nav from "./Nav"
import Header from "./Header";
const Home = () => {
  return (
  <>
   <Nav/> 
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