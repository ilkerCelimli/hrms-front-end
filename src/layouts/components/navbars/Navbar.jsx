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
    Button,Row,Col, Modal, ModalHeader, ModalBody
    
  } from 'reactstrap'; 
import LoginPage from '../../../pages/LoginPage';
  import './navbar.css'

export default function AdminSidebar() {

    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
   
      const [modal,setModal] = useState(false)
      const toggleB = () => setModal(!modal);
    
  
    return (
        <div className ='navbar'  >
        <Navbar light expand="md" className= 'navbar'>
          <NavbarBrand className='navbar'></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            
              <NavItem className = 'navitems'>
                <NavLink href="/#" id = 'AdvertLink' className = 'navbar' >İlanlar</NavLink>
              </NavItem>

           
              <NavItem className = 'navitems'>
                <NavLink href="/#" id = 'profil'>Profil</NavLink>
              </NavItem>

            

              
              
              <Row>
                <Col/> <Col/> <Col/> <Col/> <Col/> <Col/> 
               <Button onClick= {toggleB} size ='sm' id = 'login-button' >Giriş yap</Button>
               <Modal isOpen = {modal} toggle = {toggleB} className = 'navbar-modal'>
                <ModalHeader toggle = {toggleB}>Kullanıcı Girişi</ModalHeader>
                <ModalBody>
                  <LoginPage/>
                </ModalBody>
               </Modal>
              </Row>

            </Nav>
            
          </Collapse>
        </Navbar>
      </div>
    );
  }
