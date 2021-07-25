import React from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import { FormGroup,Form,Label,Input, Button } from 'reactstrap'

const validationSchema = Yup.object({
    email : Yup.string().email().required("Email doğru biçimde girilmeli"),
    password : Yup.string().min(2,"Şifre en az 2 karakterden oluşmalı").required("şifre doğru biçimde girilmeli"),
    rePassword : Yup.string().required("İki şifrede aynı olmalı"),
    nationalIdendity: Yup.string().required("Tc No zorunlu"),
    birtday : Yup.string().required("doğum yılı zorunlu"),
})
    export default function JobSeekerRegisterForm() {
   
        const {handleSubmit , handleChange,values,} = useFormik({
            initialValues :{
                email: '',
                password : '',
                rePassword : '',
                nationalIdendity : '',
                birtday : '',
            },validationSchema, onSubmit: values => {JSON.stringify(values,5,null);},
        })  

        return (
            <div>
              <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label>Email</Label> <br/>
                    <Input
                    type = 'text'
                    name = 'email'
                    placeholder = 'Example@example.com'
                    onChange = {handleChange}
                   
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Şifre</Label> <br/>

                    <Input
                    type = 'password'
                    name ='password'
                    onChange = {handleChange}
                
                    />

                </FormGroup>

                <FormGroup>
                    <Label>Şifre tekrarı</Label> <br/>

                    <Input
                    type = 'password'
                    name ='rePassword'
                    onChange = {handleChange}
        
                    />

                </FormGroup>
                
                <FormGroup>
                    <Label>Tc Kimlik No</Label> <br/>

                    <Input
                    type = 'text'
                    name ='nationalIdendity'
                    onChange = {handleChange}
       
                    />

                </FormGroup>

                <FormGroup>

                    <Label>
                        Doğum yılı
                    </Label>

                    <Input
                     type = 'text'
                     name = 'birtday'
                     onChange = {handleChange}/>
                </FormGroup>
                    <br/>
                <Button onSubmit = {handleChange} size = 'sm' > Kayıt ol</Button>
                </Form>  
              
            </div>
        )
    }

    

