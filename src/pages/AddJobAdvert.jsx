import { Formik, useFormik } from 'formik'
import React ,{useState,useEffect} from 'react'
import { Form, FormGroup, Input, Label,Button } from 'reactstrap'
import * as Yup from 'yup'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import EmployerService from '../services/EmployerServices';





export default function AddJobAdvert() {
    const validationSchema = Yup.object().shape({
        businessSector: Yup.string().required("İş kolu zorunludur."),
        activeDate: Yup.date().required("Aktiflik süresi zorunludur."),
        relaseDate:Yup.date().required("Çıkış tarihi zorunludur"),
        
        openPosition: Yup.string().required("Açık pozisyon sayısı zorunludur"),
        minSalary : Yup.string().required("Minimum maaş zorunludur."),
        maxSalary : Yup.string().required("Maksimum maaş zorunludur"),
        desciription: Yup.string().required("Açıklama zorunludur"),
        workType : Yup.string().required("Çalışma şekli zorunludur."),
        city : Yup.string().required("Şehir Boş geçilemez.")
        
    
    }) 
 
    
    const formik = useFormik({
        initialValues:{
            businessSector : '',
            relaseDate : '',
           activeDate : '',
           openPosition :'',
           minSalary : '',
           maxSalary : '',
           active : 'false',
           desciription : '',
           cityName : '',
           workType : ''

           

            
        } ,validationSchema ,onSubmit : values =>(
            console.log(values)
        )
    })
    const [relaseDate,setRelaseDate] = useState(new Date());
    const[activeDate,setActiveDate] = useState(new Date());
    const [jobAdverts,setJobAdverts] = useState([]);
    useEffect(()=> {
        let employerService = new EmployerService();
        values.activeDate = activeDate;
        values.relaseDate = relaseDate;
        console.log(values)
        
        employerService.addJobAdvert(values,[]).then(data =>setJobAdverts(data))

    
        
    },[])
    return (
        <div>
            

            <Form >
            
                <FormGroup>
                    <Label>İş Sektörü</Label>
                    <Input type ='select' name ='businessSector' onChange = {formik.handleChange} value = {formik.values.businessSector}>
                        <option>Yazılım Mühendisliği</option>
                        <option>Back End developer</option>
                        <option>Front end Developer</option>
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label>İlan tarihi</Label>
                    <DatePicker selected = {relaseDate} onChange = {(date) => setRelaseDate(date)} value = {formik.values.relaseDate}/>
                </FormGroup>

                <FormGroup>
                    <Label>Aktiflik tarihi</Label>
                    <DatePicker selected = {activeDate} onChange = {(date) => setActiveDate(date)} value = {formik.values.activeDate} />
                </FormGroup>

                <FormGroup>
                    <Label>Açık Pozisyon</Label>
                    <Input type = 'text' name = 'openPosition' onChange = {formik.handleChange} value = {formik.values.openPosition} > </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Minimum - Maksimum Fiyat</Label>
                    <Input type = 'text' name = 'minSalary' placeholder = 'Minimum fiyat' onChange = {formik.handleChange}/>
                    <Input type = 'text' name ='maxSalary' placeholder = 'Maksimum fiyat' onChange = {formik.handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Label>Çalışma Şekli</Label>
                    <Input type ='select' name ='workType' onChange = {handleChange}>
                        <option>Remote</option>
                        <option>Yarı Remote</option>
                        <option>Tam zamanlı</option>
                        <option>Part Time</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Şehir</Label>
                    <Input type = 'text'name = 'city' onChange = {handleChange}/>
                </FormGroup>

                <FormGroup>
                    <Label>İş açıklaması</Label>
                    <Input type = 'text' name = 'desciription' onChange = {handleChange} />
                </FormGroup>
                <Button color ='primary' onSubmit = {handleSubmit}>Kaydet</Button>
            </Form> 

        </div>
    )
}
