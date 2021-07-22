import React from 'react'
import '../css/pages.css'
import { Button ,Modal,ModalHeader,ModalBody, Row,Col} from 'reactstrap'
import {useState} from 'react'
import LoginForm from '../layouts/components/forms/LoginForm'
import './pages.css'
import JobSeekerRegisterPage from './JobSeekerRegister'
import {Link, Route} from 'react-router-dom'
export default function LoginPage() {

    const [modal ,setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    
    return (
        <div>
            <LoginForm/> 
            <Modal isOpen = {modal} toggle = {toggle} className = 'login-div'> 
                <ModalHeader className= 'login-div' toggle = {toggle}>Kullanıcı türü</ModalHeader> 
              <Row>

                  <Col/>  <Col/>
              <ModalBody className ='modalBody' >
                    <Button size = 'sm' color ='primary'>İşveren</Button>
                    
                    <br/>
                    <br/>
                    <Button size = 'sm' color ='primary'>İşci adayı</Button>
            
                </ModalBody>
              </Row>
              
               
            </Modal>

            <br/>
            
         <Button onClick = {toggle} color = 'primary' size ='sm'> Kayıt Ol</Button>
            <br/>
          
         
          

        </div>
    )
}
