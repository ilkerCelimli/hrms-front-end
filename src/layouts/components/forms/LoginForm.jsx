import React,{useEffect} from 'react'
import * as Yup from 'yup'
import {useFormik,} from 'formik'
import { Label,Input ,Form,Button,FormGroup} from 'reactstrap'

const validationSchema = Yup.object().shape({
    email : Yup.string().email().required("Email zorunlu"),
    password : Yup.string().required("Şifre Zorunlu"),
})

export default function LoginForm(){

const {handleSubmit , handleChange,values} = useFormik({
    initialValues : {
        email : '',
        password : '',

    },validationSchema , onSubmit: values => {console.log(values)}
})

 
    
    return (
            
        <div>

        <Form>
            <FormGroup>
            <Label>Email</Label> <br/>
            <Input 
            type ='email' placeholder = 'example@example.com'
            onChange = {handleChange} name = 'email'

            />

            <br/>
            </FormGroup>

            <FormGroup>
            <Label>Şifre</Label> <br/>
            <Input
            type = 'password' name ='password' onChange = {handleChange} 
            />
            
            </FormGroup>
        </Form>
                <br/>   
       <Button onSubmit =  {handleSubmit} color = 'primary' size = 'sm'>Giriş yap.</Button>

        </div>
    )

}
