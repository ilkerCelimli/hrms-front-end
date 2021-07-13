import React from 'react'
import LoginFormik from '../layouts/components/LoginFormik'
import '../css/pages.css'
import { Button ,Modal,ModalHeader,ModalBody} from 'reactstrap'
import {useState} from 'react'
export default function LoginPage() {

    const [modal ,setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className = "LoginDiv">
            <LoginFormik/>
         
            <Button className ='login' size ='sm' color ='primary'> Giriş yap.</Button>
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
         
            <div><Button className ='register' size ='sm' color ='primary' onClick ={toggle}> Kayıt ol.</Button></div>

        </div>
    )
}
