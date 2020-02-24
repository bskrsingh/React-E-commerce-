import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from './Button';
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
           <NavbarComp className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand imgbrand"></img>
            </Link>
            <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
                <Link to="/" className="nav-link">
                    Products
                </Link>
            </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fa fa-cart-plus"></i> 
                    </span>
                    my cart
                </ButtonContainer>
            </Link>
           </NavbarComp>
        )
    }
}

const NavbarComp = styled.nav`
    background:var(--mainBlue);
    .nav-link{
        color:var(--mainWhite) !important;
        text-transform:capitalize;font-size:1.3rem;
    }
`