import React from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { FormGroup,Form,Label,Input,Button } from 'reactstrap'

const validationSchema = Yup.object().shape({
    email : Yup.string().email().required("Email doğru biçimde girilmeli"),
    password : Yup.string().min(2,"Şifre en az 2 karakterden oluşmalı").required("şifre doğru biçimde girilmeli"),
    rePassword : Yup.string().required("İki şifrede aynı olmalı"),
    website: Yup.string().required("web sitesi zorunlu")


})

    


    export default function EmployerRegisterForm(){
  
        const {handleSubmit , handleChange,values,errors,} = useFormik({ initialValues,
            initialValues :{
               email: '',
                password : '',
                rePassword : '',
                website : '',
            },validationSchema,onSubmit : values => {JSON.stringify(values,4,null);},

        })

        return (
            <div>
              <Form onSubmit = {handleSubmit} >
                <FormGroup>
                    <Label>Email</Label> <br/>
                    <Input
                    type = 'text'
                    name = 'email'
                    placeholder = 'Example@example.com'
                    onChange = {handleChange}
                    values = {values.email}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Şifre</Label> <br/>

                    <Input
                    type = 'password'
                    name ='password'
                    onChange = {handleChange}
                    values = {values.password}
                    />

                </FormGroup>

                <FormGroup>
                    <Label>Şifre tekrarı</Label> <br/>

                    <Input
                    type = 'password'
                    name ='rePassword'
                    onChange = {handleChange}
                    values = {values.rePassword}
                    />

                </FormGroup>
                
                <FormGroup>
                    <Label>Website</Label> <br/>

                    <Input
                    type = 'text'
                    name ='website'
                    onChange = {handleChange}
                    values = {values.website}
                    />

                </FormGroup>
                </Form>  
                <Button onSubmit = {handleSubmit} size ='sm' color = 'primary'>Kayıt Ol</Button>
            </div>
        )
    }

    


