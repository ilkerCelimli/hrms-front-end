import { useState } from "react";
import { Button, Input, Label, Form, FormGroup } from "reactstrap";
import CvServices from "../services/CvServices";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormUtil from "../utils/FormUtil";
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

  const schema = Yup.object().shape({
  gradiuationYear : Yup.string().required("Email zorunlu.").min(2),
  jobSeekerCollageDepartment : Yup.string().required("Mezun yılı zorunlu").min(2),
  jobSeekerDesciription: Yup.string().required("açıklama zorunlu").min(2),
jobSeekerExperience: Yup.string().required("Tecrübeler zorunlu").min(2),
jobSeekerGithubAdress: Yup.string().required("github Adresi zorunlu").min(2),
jobSeekerLinkedlnAdress: Yup.string().required("LinkedLn adresi zorunlu"),
jobSeekerName: Yup.string().required("İsim zorunlu"),

jobSeekerSchool: Yup.string().required("Okul zorunlu"),
jobSeekerSurname: Yup.string().required("Soyisim zorunlu"),

schoolStartyear: Yup.string().required("Okula başlama yılı zorunlu")
  })

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
    },validationSchema : schema
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
        <FormUtil
          Label="isim"
          type="text"
          name="jobSeekerName"
          placeHolder="Name"
          onChange={handleChange}
          
        />

        <FormUtil
          Label="Soyisim"
          type="text"
          name="jobSeekerSurname"
          placeHolder="Name"
          onChange={handleChange}
        />

        <FormUtil
          Label="Tecrübeler"
          type="text-area"
          name="jobSeekerExperience"
          placeHolder="Name"
          onChange={handleChange}
        />

        <FormUtil
          Label="Mezun Olunan Okul"
          type="text"
          name="jobSeekerSchool"
          onChane={handleChange}
        />

        <FormUtil
          Label="Başlama tarihi."
          type="text"
          name="schoolStartyear"
          onChange={handleChange}
        />

        <FormUtil
          Label="Bitirme tarihi"
          type="text"
          name="gradiuationYear"
          onChange={handleChange}
        />

        <FormUtil
          Label="Okul bölümü"
          type="text"
          name="jobSeekerCollageDepartment"
          onChane={handleChange}
        />

        <FormUtil
          Label="Şimdiki işi"
          type="text"
          name="nowJob"
          onChange={handleChange}
        />

        <FormUtil
          Label="Github linki"
          type="text"
          name="jobSeekerGithubAdress"
          onChange={handleChange}
        />

        <FormUtil
          Label="LinkedLn adresi"
          type="text"
          name="jobSeekerLinkedlnAdress"
          onChange={handleChange}
        />

        <FormUtil
          Label="Açıklama"
          type="text"
          name="jobSeekerDesciription"
          onChange={handleChange}
        />

        <FormGroup>
          <Label>CV Fotoğraf</Label>
          <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <Button onClick={uploadImage}> Fotoğraf Yükle. </Button>
          {console.log(url)}
        </FormGroup>

        <Button type = "submit" color = 'primary' > Kaydet </Button>

      </Form>

    
    </div>
  );
}
