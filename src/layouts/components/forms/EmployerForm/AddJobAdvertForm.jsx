import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import EmployerService from "../../../../services/EmployerServices";
import { useHistory } from "react-router-dom";
import { CityServices } from "../../../../services/CityServices";
import { BusinessAreasServices } from "../../../../services/BusinessAreasServices";

export default function AddJobAdvert() {
  const validationSchema = Yup.object().shape({
    businessSector: Yup.string().required("İş kolu zorunludur."),
    activeDate: Yup.date().required("Aktiflik süresi zorunludur."),
    relaseDate: Yup.date().required("Çıkış tarihi zorunludur"),

    openPosition: Yup.string().required("Açık pozisyon sayısı zorunludur"),
    minSalary: Yup.string().required("Minimum maaş zorunludur."),
    maxSalary: Yup.string().required("Maksimum maaş zorunludur"),
    desciription: Yup.string().required("Açıklama zorunludur"),
    workType: Yup.string().required("Çalışma şekli zorunludur."),
    city: Yup.string().required("Şehir Boş geçilemez."),
  });
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      businessSector: "",
      relaseDate: "",
      activeDate: "",
      openPosition: "",
      minSalary: "",
      maxSalary: "",
      active: "false",
      desciription: "",
      cityName: "",
      workType: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) =>
      (values.activeDate = activeDate)((values.relaseDate = relaseDate)),
  });
  let employerService = new EmployerService();

  const [relaseDate, setRelaseDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const history = useHistory();
  const [city, setCity] = useState([]);
  const [businessAreas, setBusinessAreas] = useState([]);
  const addJobAdvert = () => {
    console.log(values);
    employerService.addJobAdvert(values);
    history.push("/adminpanel");
  };
  useEffect(() => {
    let cityServices = new CityServices();
    cityServices.getCities().then((result) => setCity(result.data));
    let businessAreas = new BusinessAreasServices();
    businessAreas
      .getAllBusinessAreas()
      .then((result) => setBusinessAreas(result.data));
      
  }, []);
  console.log(businessAreas);
  console.log(city);
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label className="label">İş Sektörü</Label>
          <Input
            type="select"
            name="businessSector"
            onChange={handleChange}
            onSelect={handleChange}
            onError={() => {
              alert("İş sektörü boş geçilemez.");
            }}
          >
            <option value = {null} >Seçiniz.</option>
            {businessAreas.map((item) => (
              <option 
                key={item.businessSectorId}
                value={item.businessSectorId}
              >
                {item.businessSectorName}
                {console.log(item.businessSectorName)}
              </option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label className="label">İlan tarihi</Label>
          <DatePicker
            selected={relaseDate}
            onChange={(date) => setRelaseDate(date)}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label">Aktiflik tarihi</Label>
          <DatePicker
            selected={activeDate}
            onChange={(date) => setActiveDate(date)}
          />
        </FormGroup>
              
        <FormGroup>
          <Label className="label">Açık Pozisyon</Label>
          <Input
            type="text"
            name="openPosition"
            onChange={handleChange}
            onError={() => {
              alert("Açık pozisyon sayısı girilmelidir.");
            }}
          ></Input>
          </FormGroup>
        <FormGroup>
          <Label className="label">Minimum Fiyat </Label>
          <Input
            type="text"
            name="minSalary"
            placeholder="Minimum fiyat"
            onChange={handleChange}
            onError={() => {
              alert("Minimum maaş girilmeilidr.");
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label">Maksimum Fiyat</Label>
          <Input
            type="text"
            name="maxSalary"
            placeholder="Maksimum fiyat"
            onChange={handleChange}
            onError={() => {
              alert("Maksimum maaş girilmeilidr.");
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label">Çalışma Şekli</Label>
          <Input
            type="select"
            name="workType"
            onChange={handleChange}
            onSelect={handleChange}
            onError={() => {
              alert("Çalışma şekli seçilmelidir.");
            }}
          >
            <option value = {null}>Seçiniz.</option>
            <option value="Remote">Remote</option>
            <option value="Yarı Remote">Yarı Remote</option>
            <option value="Tam zamanlı">Tam zamanlı</option>
            <option value="Part Time">Part Time</option>
          </Input>
        </FormGroup>
        -
        <FormGroup>
          <Label className="label">Şehir</Label>
          <Input
            type="select"
            name="city"
            onChange={handleChange}
            onError={() => {
              alert("Şehir seçilmelidir.");
            }}
          >
            <option>Şehir Seçiniz</option>
            {city.map((item) => (
              <option key={item.cityId} value={item.cityId}>
                {item.cityName}
              </option>
            ))}
          </Input>
        </FormGroup>
        -
        <FormGroup>
          <Label className="label">İş açıklaması</Label>
          <Input
            type="text"
            name="desciription"
            onChange={handleChange}
            onError={() => {
              alert("İş açıklaması boş geçilemez.");
            }}
          />
        </FormGroup>
        <Button
          color="primary"
          type="submit"
          onSubmit={handleSubmit}
          onClick={() => {
            //    addJobAdvert();
            values.activeDate = activeDate;
            values.relaseDate = relaseDate;
            addJobAdvert();
            console.log(values);
          }}
        >
          Kaydet
        </Button>
      </Form>
    </div>
  );
}
