import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import * as Yup from "yup";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import EmployerService from "../services/EmployerServices";
import { useHistory } from "react-router-dom";

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
    validationSchema,
    onSubmit: (values) => (
      console.log(values),
      (values.activeDate = activeDate),
      (values.relaseDate = relaseDate)
    ),
  });
  let employerService = new EmployerService();

  const [relaseDate, setRelaseDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());
  const history = useHistory();
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>İş Sektörü</Label>
          <Input
            type="select"
            name="businessSector"
            onChange={handleChange}
            onSelect={handleChange}
          >
            <option>Seçiniz.</option>
            <option value="Yazılım Mühendisliği">Yazılım Mühendisliği</option>
            <option value="Back End developer">Back End developer</option>
            <option value="Front end Developer">Front end Developer</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>İlan tarihi</Label>
          <DatePicker
            selected={relaseDate}
            onChange={(date) => setRelaseDate(date)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Aktiflik tarihi</Label>
          <DatePicker
            selected={activeDate}
            onChange={(date) => setActiveDate(date)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Açık Pozisyon</Label>
          <Input type="text" name="openPosition" onChange={handleChange}>
            {" "}
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>Minimum Fiyat </Label>
          <Input
            type="text"
            name="minSalary"
            placeholder="Minimum fiyat"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Maksimum Fiyat</Label>
          <Input
            type="text"
            name="maxSalary"
            placeholder="Maksimum fiyat"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Çalışma Şekli</Label>
          <Input
            type="select"
            name="workType"
            onChange={handleChange}
            onSelect={handleChange}
          >
            <option>Seçiniz.</option>
            <option value="Remote">Remote</option>
            <option value="Yarı Remote">Yarı Remote</option>
            <option value="Tam zamanlı">Tam zamanlı</option>
            <option value="Part Time">Part Time</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label>Şehir</Label>
          <Input type="text" name="city" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>İş açıklaması</Label>
          <Input type="text" name="desciription" onChange={handleChange} />
        </FormGroup>
        <Button
          color="primary"
          type="submit"
          onSubmit={handleSubmit}
          onClick={() => {
            values.activeDate = activeDate;
            values.relaseDate = relaseDate;
            console.log(values);
            employerService.addJobAdvert(values);
            //history.push('/adminpanel')
          }}
        >
          Kayıt Ol
        </Button>
      </Form>
    </div>
  );
}
