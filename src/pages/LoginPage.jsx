import React from "react";
import "../css/pages.css";
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { useState } from "react";
import LoginForm from "../layouts/components/forms/LoginForm";
import "./pages.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <LoginForm />
      <Modal isOpen={modal} toggle={toggle} className="login-div">
        <ModalHeader className="login-div" toggle={toggle}>
          Kullanıcı türü
        </ModalHeader>
        <Row>
          <Col /> <Col />
          <ModalBody className="modalBody">
            <Button
              size="sm"
              color="primary"
              onClick={() => {
                setModal(false);
              }}
            >
              <Link className="buton" to="/employerRegister">
                {" "}
                İşveren{" "}
              </Link>{" "}
            </Button>

            <br />
            <br />
            <Button
              size="sm"
              color="primary"
              onClick={() => {
                setModal(false);
              }}
            >
              <Link className="buton" to="/jobseekerRegister">
                İşci
              </Link>
            </Button>
          </ModalBody>
        </Row>
      </Modal>

      <br />

      <Button onClick={toggle} color="dark" size="sm">
        Kayıt Ol 
      </Button>
     
      <br />
    </div>
  );
}
