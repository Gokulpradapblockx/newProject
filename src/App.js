import React from "react";
import Home from "./Home";
import Nav from "./Nav"
import Portfolio from "./Portfolio";
import Services from "./Services";
import Aboutus from "./Aboutus";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
export default function App() {
return(  
  <>
  <nav>
   <Nav/>  
   </nav>
    <Routes>    
      <Route path="/" element={ <Home/> }/>
      <Route path="/Portfolio" element={  <Portfolio/> }/>
      <Route path="/Services" element={<Services/> }/>
      <Route path="/Aboutus" element={   <Aboutus/> }/>           
    </Routes>
    </>
  )
}