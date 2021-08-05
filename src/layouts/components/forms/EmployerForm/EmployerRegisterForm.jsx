import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import EmployerService from "../../../../services/EmployerServices";
import { useHistory } from "react-router-dom";
import '../forms.css'
export default function EmployerRegisterForm() {
  const validationSchema = Yup.object().shape({
    userEmail: Yup.string().email().required("Email doğru biçimde girilmeli"),
    userPassword: Yup.string()
      .min(2, "Şifre en az 2 karakterden oluşmalı")
      .required("şifre doğru biçimde girilmeli"),
    rePassword: Yup.string().required("İki şifrede aynı olmalı"),
    employerName: Yup.string().required("Firma adı zorunlu"),
    employerAdress: Yup.string().required("Adres zorunlu"),
    employerWebsite: Yup.string().required("web sitesi zorunlu"),
  });

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      employerAdress: "",
      employerName: "",
      employerWebsite: "",
      rePassword: "",
      userEmail: "",
      userPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {console.log(values)},
  });
  let employerService = new EmployerService();
  const history = useHistory();

  const EmloyerRegister = () => {
    console.log(values.userEmail);
          employerService.addEmployer(values);
          history.push("/#");

  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className = "forms">
        <FormGroup>
          <Label>Email</Label> <br />
          <Input
            type="email"
            name="userEmail"
            placeholder="Example@example.com"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Şifre</Label> <br />
          <Input type="password" name="userPassword" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Şifre tekrarı</Label> <br />
          <Input type="password" name="rePassword" onChange={handleChange} />
          <FormGroup>
            <Label>Firma Adı</Label>
            <Input type="text" onChange={handleChange} name="employerName" />
          </FormGroup>
        </FormGroup>

        <FormGroup>
          <Label>Adres</Label>
          <Input name="employerAdress" type="text" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Website</Label> <br />
          <Input type="text" name="employerWebsite" onChange={handleChange} />
        </FormGroup>
      </Form>
      <Button
        onSubmit={handleSubmit}
        size="sm"
        color="primary"
        onClick={() => {
          EmloyerRegister()
        }}
      >
        Kayıt Ol
      </Button>
    </div>
  );
}
