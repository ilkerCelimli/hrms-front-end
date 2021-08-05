import React , {useState} from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import CvServices from '../services/CvServices'
import { useFormik } from 'formik';
export default function UpdateCv() {
   
    const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
   

const saveFile = (e) => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].names)
};

const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file",file)
    formData.append("fileName",fileName)

    try {
        const services = new CvServices();
        const res = await services.updateCv(formData);
        console.log(res)
    }
    catch(ex) {
        console.log(ex)
    }
}

       
    

    return (
        <div>
         
         <Input type = 'file' onChange = {saveFile} />
         <Button type = 'submit' onClick = {uploadFile}>Kaydet</Button>
        </div>
    )
}
