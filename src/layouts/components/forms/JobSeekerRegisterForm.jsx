import React from 'react'
import * as Yup from 'yup'
import {Formik, useFormik,} from 'formik'
import { Label,Input ,Form,Button} from 'reactstrap'

export default function JobSeekerRegisterForm() {

    const validationSchema =Yup.object().shape({
        email: Yup.string().email().required(),
        password : Yup.string().required(),
        rePassword : Yup.string().required(),
        birtday: Yup.string().required(),
    })

    const formik = () =>useFormik({
        initialValues:{
         email :'',
         password  : '',
         rePassword : '',
         birtday : '',       
        }
    })
    return (
        <div>
            
            <Form onSubmit ={Formik.handleSubmit}>
                
                <Label> Email</Label> <br/>

               <Input name = 'email' placeholder = 'example@example.com'
               type = 'email' onChange ={Formik.handleChange} /> <br/>

               <Label> Şifre </Label> <br/>

                <Input name ={formik.password} type ='password' onChange = {Formik.handleChange}/> <br/>

                <Label> Şifre</Label> <br/>

                <Input name = 'rePassword' type ='password' onChange={Formik.handleChange}/> <br/>

                <Label>Doğum günü</Label> <br/>

                <Input name = 'birtday' onChange = {Formik.handleChange}/>

                    <br/>

                    <Button color ='primary' >Kayıt ol</Button>


            </Form>


        </div>
    )
}
