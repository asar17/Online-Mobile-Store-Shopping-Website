import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ButtonNavbar from './ButtonNavbar'
import logo from '../logo.png'
class Navbar extends React.Component{
    render(){
        
        return(
            <NavWrapper className="navbar navbar-expand-sm  px-sm-5">
                <Link to="/">
                    <img src={logo} className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center ms-5 ">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">product</Link>
                    </li>
                </ul>

                <Link to="/cart" className="ms-auto">
                    <ButtonNavbar >
                        <i className="fa fa-shopping-cart"/>
                        my cart
                    </ButtonNavbar>
                </Link>

            </NavWrapper>
              


        )
    }
}
const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)
}
font-size:1.3rem;
text-transform:capitalize;
`

export default Navbar;