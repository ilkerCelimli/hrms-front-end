import axios from 'axios'


export class BusinessAreasServices {


    getAllBusinessAreas() {

        return axios.get("http://localhost:8081/api/v1/businessareas/v1/getall")
    }

}