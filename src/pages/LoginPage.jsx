import React from 'react'
import LoginForm from '../layouts/components/forms/LoginForm'
import '../css/pages.css'
import { Button ,Modal,ModalHeader,ModalBody} from 'reactstrap'
import {useState} from 'react'
export default function LoginPage() {

    const [modal ,setModal] = useState(false);
    const toggle = () => setModal(!modal);

    
    return (
        <div className = "LoginDiv">
            <LoginForm/>
            <br/>
          
            <Modal isOpen = {modal} toggle = {toggle}>
                <ModalHeader toggle = {toggle}>Kullanıcı türü</ModalHeader> 
                <ModalBody className ='modalBody' >
                    <Button size = 'sm' color ='primary'>İşveren</Button>
                    <br/>
                    <br/>
                    <Button size = 'sm' color ='primary'>İşci adayı</Button>

                </ModalBody>
            </Modal>

            <br/>
         
          

        </div>
    )
}
