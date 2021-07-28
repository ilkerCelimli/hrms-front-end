import { useFormik } from 'formik'
import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import * as Yup from 'yup'


export default function AddCvForm() {

    const [values,handleChange,handleSubmit] = useFormik({
        initialValues: {
            file : '',

        },onSubmit : (values) => (console.log(values))
    })
    return (
        <div>
            <Form onSubmit = {handleChange}>
                <FormGroup>
                    <Label>Cv fotosu</Label>
                    <Input type = 'file' name = 'file' onChange= {handleChange}/>
                </FormGroup>
            </Form>

            <Button type = 'submit' onSubmit = {handleSubmit} onClick = {() => {
                // Axios
            }} >Kaydet</Button>
        </div>
    )
}
