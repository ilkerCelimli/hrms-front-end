import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Form, Label ,Input, FormGroup,Button } from 'reactstrap'
import * as Yup from 'yup'
import {JobSeekerServices} from '../../../../services/JobSeekerServices'

const validationSchema = Yup.object().shape( {
    jobSeekerLinkedlnAdress : Yup.string().required("linkedln adresi zorunlu")
})


export default function AddGithubForm() {


    const [values,handleChange,handleSubmit] = useFormik({
        initialValues : {
            jobSeekerLinkedlnAdress : ''
        } , validationSchema : validationSchema ,onSubmit: (values) => {console.log(values)}
    })

    const [id,setId] = useState(0)


    const addLinkedLnForm = () => {
    
        let jobSeekerService = new JobSeekerServices();
        setId(2)
        jobSeekerService.addLinkedLn(values,id)
    }

    return (
        <div>
            
          <Form onSubmit = {handleSubmit}>
              <FormGroup>
              <Label>github Adresi</Label>
              <Input type = 'text' name = 'jobSeekerLinkedlnAdress' onChange = {handleChange}/>
              </FormGroup>
              
              <Button type ='submit' onSubmit = {handleSubmit} onClick = {() => {
               addLinkedLnForm();
              }}> Ekle </Button>
          </Form>

        </div>
    )
}
