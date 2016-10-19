 import React,{ Component } from 'react';
 import { Link } from 'react-router';
 import CartCounter from '../containers/cart_counter';
 import Bootstrap from '../../scripts/bootstrap.min.js'

 export const Menu = (props) =>{
    return(
        <nav className="navbar navbar-dark navbar-fixed-top scrolling-navbar">
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#collapseEx">
            <i className="fa fa-bars"></i>
        </button>
        <div className="container">
            <div className="collapse navbar-toggleable-xs" id="collapseEx">
                <ul className="nav navbar-nav animated fadeInLeft">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">
                      <i className="fa fa-home menu-icon"></i>
                          Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to="/services">
                     <i className="fa fa-list menu-icon"></i>
                     Services
                        </Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to="/howitworks">
                     <i className="fa fa-question menu-icon"></i>
                     How It works
                    </Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to="/aboutus">
                     <i className="fa fa-shield menu-icon"></i>
                     About Us
                    </Link>
                    </li>
                    <li className="nav-item">
                     <Link className="nav-link" to="/contactus">
                     <i className="fa fa-comment menu-icon"></i>
                     Contact Us
                    </Link>
                    </li>
                    <li className="nav-item">
                        <CartCounter />
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    );
 }


