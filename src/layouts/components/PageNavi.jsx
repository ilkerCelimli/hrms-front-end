import React, { useState } from 'react'
import { Navbar , NavbarBrand ,NavbarToggler,Collapse,Nav,NavItem,NavLink} from 'reactstrap';

export default function pageNavi() {

  const PageNavi = (props) => {
    const [isOpen,setIsOpen] =useState(false);
   const toggle = () => setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar color ="light" light expand ="md">
        <NavbarBrand href ="/" id ="NavbarBrand">HRMS Proje</NavbarBrand>
        <NavbarToggler onclick ={toggle}/>
        <Collapse isOpen = {isOpen} navbar>
          <Nav className = "mr-auto" navbar>
            <NavItem>
              <NavLink href = "/components"> Components
              </NavLink>
              </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


    </div>
  )
}
