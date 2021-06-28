import React, { useState , isOpen,toggle } from 'react'
import { Navbar , NavbarBrand ,NavbarToggler,Collapse,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,
DropdownMenu,DropdownItem,} from 'reactstrap';
import components from './components.css'
export default function pageNavi() {

  const PageNavi = (props) => {
    const [isOpen,setIsOpen] =useState(false);
   const toggle = () => setIsOpen(!isOpen);
  }

  return (
    <div className ="col" id ="pageNavi">
     


    </div>
  )
}
