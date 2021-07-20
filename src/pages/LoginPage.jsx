import React from 'react'
import '../css/pages.css'
import { Button ,Modal,ModalHeader,ModalBody} from 'reactstrap'
import {useState} from 'react'
import LoginForm from '../layouts/components/forms/LoginForm'
export default function LoginPage() {

    const [modal ,setModal] = useState(false);
    const toggle = () => setModal(!modal);
    
    
    return (
        <div className = "LoginDiv">
            <LoginForm/> 
            <Modal isOpen = {modal} toggle = {toggle} className = 'LoginDiv'>
                <ModalHeader toggle = {toggle}>Kullanıcı türü</ModalHeader> 
                <ModalBody className ='modalBody' >
                    <Button size = 'sm' color ='primary'>İşveren</Button>
                    <br/>
                    <br/>
                    <Button size = 'sm' color ='primary'>İşci adayı</Button>
            
                </ModalBody>
            </Modal>

            <br/>
            
         <Button onClick = {toggle} color = 'primary' size ='sm'> Kayıt Ol</Button>
            <br/>
          
         
          

        </div>
    )
}
