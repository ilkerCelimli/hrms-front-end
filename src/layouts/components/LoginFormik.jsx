import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Label,Input,Form,FormGroup,Row,Col,Container } from 'reactstrap'
import 'D:/JavaKamp/HrmsFrontEnd/hrms-front-end/src/css/pages.css'
export default function LoginFormik() {

    const validationSchema = Yup.object({
        email:Yup.string().required("Zorunlu alan"),
        password :Yup.string().required("Zorunu alan")
    })
    
    const Login = () => {
        const {handleSubmit,handleChange,values,errors} = useFormik({
            initialValues: {
                email : '',
                password : ''
            },
            validationSchema,onSubmit:values => {
                console.log(values)
            },
        })
       
    }
    return (
        <div className = "loginForm">
          
            <Form>
                <FormGroup>
                    <Label className ='loginlbl' for ="exampleEmail">Email</Label>
                    <Input type = 'email' name ="email" id ="exampleEmail" placeHolder ='Example@Example.com'
                    size ='sm' className ='loginInput'></Input>
                    <Label for = 'examplepassword' className ='loginlbl'> Şifre</Label>
                    <Input type = 'password' name ='password' id ='examplePassword' className = 'loginInput'
                    size ='sm'/>
                </FormGroup>
            </Form>
           
        </div>
    )
}
