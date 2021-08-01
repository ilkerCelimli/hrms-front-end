import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Form, Label ,Input, FormGroup,Button } from 'reactstrap'
import * as Yup from 'yup'
import {JobSeekerServices} from '../../../../services/JobSeekerServices'


const validationSchema = Yup.object().shape( {
    jobSeekerGithubAdress : Yup.string().required("Github adresi zorunlu")
})


export default function AddGithubForm() {


    const [values,handleChange,handleSubmit] = useFormik({
        initialValues : {
            jobSeekerGithubAdress : ''
        } , validationSchema : validationSchema ,onSubmit: (values) => {console.log(values)}
    })

    const [id,setId] = useState(0)

    const addGithubForm = () => {

        let jobSeekerService = new JobSeekerServices();
        setId(2)
        jobSeekerService.addGithub(values,id)
    }

    return (
        <div>
            
          <Form onSubmit = {handleSubmit}>
              <FormGroup>
              <Label>github Adresi</Label>
              <Input type = 'text' name = 'jobSeekerGithubAdress' onChange = {handleChange}/>
              </FormGroup>
              
              <Button type ='submit' onSubmit = {handleSubmit} onClick = {() => {
              addGithubForm()
              }}> Ekle </Button>
          </Form>

        </div>
    )
}
