import React from 'react'
import * as Yup from 'yup'
import {Formik, useFormik,} from 'formik'
import { Label,Input ,Form,Button} from 'reactstrap'

export default function EmployerRegisterForm() {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password : Yup.string().required(),
        rePassword : Yup.string().required(),
        website : Yup.string().required(),
        

    })
    const EmployerRegisterForm = () => {
        const formik = useFormik({
            initialValues: {
                email : '',
                password : '',
                rePassword :'',
                website : '',validationSchema,onsubmit:values =>{JSON.stringify(values,null,3)}
            }
        })
    }

    return (
        <div>
            <Form onSubmit ={Formik.handleSubmit}>
                
                <Label> Email</Label> <br/>

               <Input name = 'email' placeholder = 'example@example.com'
               type = {EmployerRegisterForm.email} onChange ={Formik.handleChange} /> <br/>

               <Label> Şifre </Label> <br/>

                <Input name ={EmployerRegisterForm.password} type ='password' onChange = {Formik.handleChange}/> <br/>

                <Label> Şifre</Label> <br/>

                <Input name = {EmployerRegisterForm.rePassword} type ='password' onChange={Formik.handleChange}/> <br/>

                <Label>Web site</Label> <br/>

                <Input name = {EmployerRegisterForm.website} onChange = {Formik.handleChange}/>

                    <br/>

                    <Button color ='primary' >Kayıt ol</Button>


            </Form>
        </div>
    )
}
