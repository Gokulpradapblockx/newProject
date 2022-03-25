import React,{Component} from 'react';
import Expertise from '../Servicecard/Expertise'
import Industries from '../Servicecard/Industries'
import Services from '../Servicecard/Services'
import { BrowserRouter, Router, Route, Routes, Link } from 'react-router-dom';

  class Servicecard extends Component {
    render () {
    return (
      <BrowserRouter> 
    <Router>
    <div className="About-service"> 
      <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <div className="why">
              <h1>
                <span>Our</span> <br />
                Services
              </h1>
            </div>
          </div>
          <div className="opacity container-fluid col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <h1>Services</h1>
          </div>
        </div>
      <div className="container">
      
      <ul class="exper me-auto mb-2 mb-lg-0">
              <li class="servi">
              <Link to="./">Expertise</Link>             
              </li>
              <li class="servi">
              <Link to="/service">Services</Link>              
              </li>
              <li class="servi">
              <Link to="/industry">Platforms</Link>              
              </li>      
              <li class="servi">
              {/*   <Link to="/industry">Platforms</Link>  */}
              <a href="">Technologies</a>
              </li>     
            </ul> 
            <Routes>
    <Route exact path='/' element={< Expertise />}></Route>
    <Route exact path='/service' element={< Services />}></Route>
    <Route exact path='/industry' element={< Industries />}></Route>
    </Routes>
    </div>
  </div>
  </Router>
  </BrowserRouter> 
  )
}

  }
  export default Servicecard;
