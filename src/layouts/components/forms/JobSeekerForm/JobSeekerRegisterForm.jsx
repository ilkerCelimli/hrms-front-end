import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { FormGroup, Form, Label, Input, Button } from "reactstrap";
import { JobSeekerServices } from '../../../../services/JobSeekerServices'
import { useHistory } from "react-router-dom";
const validationSchema = Yup.object({
  email: Yup.string().email().required("Email doğru biçimde girilmeli"),
  password: Yup.string()
    .min(2, "Şifre en az 2 karakterden oluşmalı")
    .required("şifre doğru biçimde girilmeli"),
  rePassword: Yup.string().required("İki şifrede aynı olmalı"),
  nationalIdendity: Yup.string().required("Tc No zorunlu"),
  birtday: Yup.string().required("doğum yılı zorunlu"),
});
export default function JobSeekerRegisterForm() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      birtday : '',
      jobSeekerAdress : '',
      jobSeekerName :'',
      jobSeekerNationalId : '',
      jobSeekerPhone : '',
      jobSeekerSurname : '',
      rePassword : '',
      userEmail : '',
      userPassword : ''



    },
    validationSchema,
    onSubmit: (values) => {
      JSON.stringify(values, 5, null);
    },
  });
  const history = useHistory();
  let jobSeekerServices = new JobSeekerServices();
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label> <br />
          <Input
            type="text"
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
        </FormGroup>

        <FormGroup>
          <Label>Tc Kimlik No</Label> <br />
          <Input type="text" name="jobSeekerNationalId" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>İsim</Label>
          <Input type = 'text' name = "jobSeekerName" onChange = {handleChange}/>
        </FormGroup>

        <FormGroup>
          <Label>Soyisim</Label>
          <Input type = 'text' name = 'jobSeekerSurname' onChange = {handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Doğum yılı</Label>

          <Input type="text" name="birtday" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Adres</Label>
          <Input type = 'text' name = 'jobSeekerAdress' onChange = {handleChange} />
        </FormGroup>
        
        <FormGroup>
          <Label>Telefon Numarası</Label>
          <Input type = 'text' name = 'jobSeekerPhone' onChange = {handleChange} />
        </FormGroup>
        <br />
        <Button onSubmit={handleChange} size="sm" onClick = {() => {
              console.log(values);
              jobSeekerServices.addJobSeeker(values )
              history.push("/#")
        }}>
          {" "}
          Kayıt ol
        </Button>
      </Form>
    </div>
  );
}
