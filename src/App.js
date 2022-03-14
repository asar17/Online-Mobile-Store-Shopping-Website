
import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar'
import Productlist from './component/Productlist'
import Details from './component/Details'
import Cart from './component/cart/Cart'
import Default from './component/Default'
import Model from './component/Model'

class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Productlist/>}/>
          <Route  path="/details" element={<Details/>}/>
          <Route  path="/cart" element={<Cart/>}/>
          <Route path="*" element={<Default/>}/>
        </Routes>
        <Model/>
        
      </React.Fragment>
    )
  }
}

export default App;
