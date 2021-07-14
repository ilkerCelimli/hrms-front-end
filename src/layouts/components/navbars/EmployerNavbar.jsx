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
import 'D:/JavaKamp/HrmsFrontEnd/hrms-front-end/src/css/pages.css'
 
export default function EmployerSidebar() {

    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)


    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/" className ='navbarBrand'>İş veren</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">İlanlar</NavLink>
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
                  <DropdownItem>
                      <Button color ='primary' size ='sm'>İlan ekle</Button>
                  </DropdownItem>
                  
                  <DropdownItem divider/>

                  <DropdownItem><Button size ='sm' color ='primary'>İlanlarım</Button></DropdownItem>
        
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
