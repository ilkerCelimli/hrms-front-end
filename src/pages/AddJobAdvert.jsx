import { useFormik } from 'formik'
import React ,{useState,useEffect} from 'react'
import { Form, FormGroup, Input, Label,Button } from 'reactstrap'
import * as Yup from 'yup'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import EmployerService from '../services/EmployerServices';
import { useParams } from 'react-router-dom';



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

export default function AddJobAdvert() {
    const [jobAdverts,setJobAdverts] = useState([]);
    const {handleChange,values,handleSubmit} = useFormik({
        initialValues:{
           
            relaseDate : '',
            activeDate : '',
            businessSector : '',
            city : ''.charAt(0).toLocaleUpperCase(),
            openPosition : '',
            minSalary: '',
            maxSalary : '',
            desciription : '',
            active: 'false',
            workType : '',
            
        } ,validationSchema ,onSubmit : values =>(JSON.stringify(values,7,null))
    })
    const [relaseDate,setRelaseDate] = useState(new Date());
    const[activeDate,setActiveDate] = useState(new Date());
    useEffect(()=> {
        let employerService = new EmployerService();

        employerService.addJobAdvert(values).then(result => setJobAdverts(result.data))
       
        
    })
    return (
        <div>
            

            <Form>
            
                <FormGroup>
                    <Label>İş Sektörü</Label>
                    <Input type ='select' name ='businessSector' value = {values.businessSector}>
                        <option>Yazılım Mühendisliği</option>
                        <option>Back End developer</option>
                        <option>Front end Developer</option>
                    </Input>
                </FormGroup>
                
                <FormGroup>
                    <Label>İlan tarihi</Label>
                    <DatePicker selected = {relaseDate} onChange = {(date) => setRelaseDate(date)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Aktiflik tarihi</Label>
                    <DatePicker selected = {activeDate} onChange = {(date) => setActiveDate(date)} />
                </FormGroup>

                <FormGroup>
                    <Label>Açık Pozisyon</Label>
                    <Input type = 'text' name = 'openPosition'> </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Minimum - Maksimum Fiyat</Label>
                    <Input type = 'text' name = 'minSalary' placeholder = 'Minimum fiyat'/>
                    <Input type = 'text' name ='maxSalary' placeholder = 'Maksimum fiyat'/>
                </FormGroup>

                <FormGroup>
                    <Label>Çalışma Şekli</Label>
                    <Input type ='select' name ='workType'>
                        <option>Remote</option>
                        <option>Yarı Remote</option>
                        <option>Tam zamanlı</option>
                        <option>Part Time</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label>Şehir</Label>
                    <Input type = 'text'name = 'city'/>
                </FormGroup>

                <FormGroup>
                    <Label>İş açıklaması</Label>
                    <Input type = 'text' name = 'desciription'/>
                </FormGroup>
                <Button color ='primary' onSubmit = {handleSubmit}>Kaydet</Button>
            </Form> 

        </div>
    )
}
