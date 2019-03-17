import React, { Component } from 'react'
import {
    Navbar,
    NavbarBrand,
 } from 'react-bootstrap';


export default class TopNavbar extends Component {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar-dark bg-primary" expand="md">
          <NavbarBrand href="#">Kogan API Avg Cubic Weight Calculator</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
