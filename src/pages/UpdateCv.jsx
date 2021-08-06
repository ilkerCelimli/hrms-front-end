import { useState } from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";
import CvServices from "../services/CvServices";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function UpdateCv() {
  // const [file, setFile] = useState(null);
  // const [url,setUrl] = useState("");
  // const saveFile = (f) => {
  //   setFile(f);

  // };
  // const uploadFile = async () => {
  //   try {
  //     const services = new CvServices();
  //     const response = await services.updateCv(file);
  //     console.log("response: ", response);
  //   } catch ({ message }) {
  //     console.error(message || "unsuccesufully process.");
  //   }
  // };

  const services = new CvServices();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      gradiuationYear: "",
      jobSeekerCollageDepartment: "",
      jobSeekerDesciription: "",
      jobSeekerExperience: "",
      jobSeekerGithubAdress: "",
      jobSeekerLinkedlnAdress: "",
      jobSeekerName: "",
      jobSeekerPhotoAdress: "",
      jobSeekerSchool: "",
      jobSeekerSurname: "",
      nowJob: "",
      schoolStartyear: "",
    },
    onSubmit: (values) => {
      services.UpdateCv(values);
      console.log(values);
    },
  });

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "CvPhotos");
    data.append("cloud_name", "ilkerhrmsproject");

    services
      .uploadCvPhoto(data)
      .then((resp) => resp.data)
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
    console.log(url);
    values.jobSeekerPhotoAdress = url;
  };

  return (
    <div>
      {/* <FileBase64 onDone={saveFile} /> */}
      {/* <Button type="submit" onClick={uploadFile}>
        Kaydet
      </Button> */}

      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>İsim : </Label>
          <Input
            type="text"
            name="jobSeekerName"
            placeholder="Name"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Soysim</Label>
          <Input
            type="text"
            name="jobSeekerSurname"
            placeholder="Surname"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Tecrübeler</Label>
          <Input
            type="text-area"
            name="jobSeekerExperience"
            placeholder="Tecrübeler"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Mezun olunan Okul</Label>
          <Input type="text" name="jobSeekerSchool" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Başlama tarihi</Label>
          <Input type="text" name="schoolStartYear" onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label>Bitirme tarihi</Label>
          <Input type="text" name="gradiuationYear" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Okul Bölümü</Label>
          <Input
            type="text"
            name="jobSeekerCollageDepartment"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Şimdiki işi</Label>
          <Input type="text" name="nowJob" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <Label>Github linki</Label>
          <Input
            type="text"
            name="jobSeekerGithubAdress"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Linkedln linki</Label>
          <Input
            type="text"
            name="jobSeekerLinkedlnAdress"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>Açıklama</Label>
          <Input
            type="text"
            name="jobSeekerDesciription"
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
        <Label>CV Fotoğraf</Label>
          <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <Button onClick={uploadImage}> Fotoğraf Yükle. </Button>
          {console.log(url)}
        </FormGroup>
        <Button type = 'submit'>Cv Kaydet</Button>
      </Form>
      
    </div>
  );
}
