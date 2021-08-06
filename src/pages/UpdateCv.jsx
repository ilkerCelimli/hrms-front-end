import { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import CvServices from "../services/CvServices";
import FileBase64 from "react-file-base64";

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

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "CvPhotos");
    data.append("cloud_name", "ilkerhrmsproject");

    const services = new CvServices();
    services
      .uploadCvPhoto(data)
      .then((resp) => resp.data)
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
    console.log(url);
  };

  return (
    <div>
      {/* <FileBase64 onDone={saveFile} /> */}
      {/* <Button type="submit" onClick={uploadFile}>
        Kaydet
      </Button> */}

      <Label>CV -----</Label>

      <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <Button onClick={uploadImage}> Kaydet </Button>
      {console.log(url)}
    </div>
  );
}
