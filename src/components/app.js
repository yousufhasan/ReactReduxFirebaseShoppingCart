import React, { Component } from 'react';
import { Menu } from './menu';
import { Footer } from './footer';

export default class App extends Component {

  componentDidMount() {
      new WOW().init();   
    }

  render() {
    return (
      <div>
  		<Menu />
  		<div className="mainContent">
      	 {this.props.children}
      </div>
      <Footer />
      </div>
      
    );
  }
}
