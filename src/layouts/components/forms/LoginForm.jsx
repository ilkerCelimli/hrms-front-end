import React from 'react'
import * as Yup from 'yup'
import {Formik, useFormik,} from 'formik'
import { Label,Input ,Form} from 'reactstrap'
export default function LoginForm() {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })

    const LoginForm = () =>{
        const formik = useFormik({
            initialValues: {
                email: '',
                password : '',
            },validationSchema,onSubmit:values => {alert(JSON.stringify(values,null,2))}
        })
    }

    

    return (
        <div>
            <Form onSubmit = {Formik.handleSubmit}>
                <Label >Email</Label> 

                <br/>

                <Input id = 'email' name = 'email' type = 'email' onChange = {Formik.handleChange}
                 />


                    <br/>

                    <Label> Şifre</Label> <br/>
                 <Input id = 'password' name = 'password' type ='password' onChange = {Formik.handleChange}
                 />


            </Form>
        </div>
    )

    }