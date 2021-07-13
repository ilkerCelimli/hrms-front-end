import React from 'react'
import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button
    
  } from 'reactstrap';

export default function AdminSidebar() {

    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)


    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className='navbarBrand' href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Admin Panel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Profil</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Ayarlar
                </DropdownToggle>
                <DropdownMenu right>
                
                  <DropdownItem>
                   <Button color ='primary' size = 'sm'>Çıkış yap</Button>
                  </DropdownItem>
                  <DropdownItem divider />
        
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
