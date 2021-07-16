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
    Button,Row,Col
    
  } from 'reactstrap';

export default function AdminSidebar() {

    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)


    return (
        <div className ='navbar'  >
        <Navbar color ='light' light expand="md">
          <NavbarBrand className='navbarBrand'></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Row>
                <Col/> <Col/> <Col/> <Col/> <Col/>
              </Row>
              <NavItem>
                <NavLink href="/components/" light >İlanlar</NavLink>
              </NavItem>

              <Row>
                <Col/> <Col/> <Col/> <Col/> <Col/>
              </Row>
              <NavItem>
                <NavLink href="/">Profil</NavLink>
              </NavItem>

              <Row>
                <Col/> <Col/> <Col/> <Col/> <Col/>
              </Row>
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
