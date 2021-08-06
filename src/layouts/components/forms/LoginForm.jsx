import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Label, Input, Form, Button, FormGroup } from "reactstrap";



export default function LoginForm() {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().min(2).required("Email zorunlu"),
        password: Yup.string().min(6).required("Şifre Zorunlu"),
      });
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema : validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Form>
        <FormGroup onError = {() => alert("Email zorunlu.")}>
          <Label>Email</Label> <br />
          <Input
            type="email"
            placeholder="example@example.com"
            onChange={handleChange}
            name="email"
            onError = {() => alert("email zorunlu")}    
          />
          <br />
        </FormGroup>

        <FormGroup>
          <Label>Şifre</Label> <br />
          <Input type="password" name="password" onChange={handleChange} />
        </FormGroup>
      </Form>
      <br />
      <Button
        onSubmit={handleSubmit}
        color="primary"
        size="sm"
        onClick={() => console.log(values)}
      >
        Giriş yap.
      </Button>
    </div>
  );
}
