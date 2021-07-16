import React from 'react'
import * as Yup from 'yup'
import { Formik, useFormik,} from 'formik'
import { Label,Input ,Form,Button} from 'reactstrap'

export default function EmployerRegisterForm() {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required(),
        password : Yup.string().required(),
        rePassword : Yup.string().required(),
        website : Yup.string().required(),
        

    })
    const EmployerRegisterForm = () => {
        const employerForm = useFormik({
            initialValues: {
                email : '',
                password : '',
                rePassword :'',
                website : '',validationSchema,onSubmit:values =>{JSON.stringify(values,null,3)}
            }
        })
    }

    return (
        <div>
            <Form onSubmit ={Formik.handleSubmit}>
                
                <Label> Email</Label> <br/>

               <Input name = 'email' placeholder = 'example@example.com'
               type = 'email' onChange ={Formik.handleChange}
                value ={Formik.values.email} /> <br/>

               <Label> Şifre </Label> <br/>

                <Input name ='password' type ='password' onChange = 
                {Formik.handleChange} value = {Formik.values.password}/> <br/>

                <Label> Şifre</Label> <br/>

                <Input name = 'repassword' type ='password'
                 onChange={Formik.handleChange} value ={Formik.values.rePassword}/> <br/>

                <Label>Web site</Label> <br/>

                <Input name = 'website' onChange = {Formik.handleChange} value = {Formik.values.website}/>

                    <br/>

                    <Button color ='primary' >Kayıt ol</Button>


            </Form>
        </div>
    )
}
