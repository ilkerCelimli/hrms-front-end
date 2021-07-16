import React from 'react'
import * as Yup from 'yup'
import {useFormik,} from 'formik'
import { Label,Input ,Form,Button,FormGroup} from 'reactstrap'

const validationSchema = Yup.object({
    email : Yup.string().email().required("Email zorunlu"),
    password : Yup.string().required("Şifre Zorunlu"),
})

const LoginForm =() => {
const {handleSubmit , handleChange,values} = useFormik({
    initialValues : {
        email : '',
        password : '',

    },validationSchema , onSubmit: values => {JSON.stringify(values,4,null);}
})

    const LoginButtonEvent = () => {
      
        console.log(values.email , values.password)
    }
    return (
        <div>

        <Form onSubmit = {handleChange}>
            <FormGroup>
            <Label>Email</Label> <br/>
            <Input 
            type ='email' placeholder = 'example@example.com'
            onChange = {handleChange} value = {values.email} name = 'email'

            />

            <br/>
            </FormGroup>

            <FormGroup>
            <Label>Şifre</Label> <br/>
            <Input
            type = 'password' name ='password' onChange = {handleChange} 
            value = {values.password} />
            
            </FormGroup>
        </Form>
                <br/>   
       

        </div>
    )

}
export default LoginForm