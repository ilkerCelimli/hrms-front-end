import axios from 'axios';

export default class CvServices {
    async uploadCvPhoto(data) {
        return await axios.post("https://api.cloudinary.com/v1_1/ilkerhrmsproject/image/upload" ,data);
    }

    async UpdateCv(data) {
        return await axios.post();
    }
 
}