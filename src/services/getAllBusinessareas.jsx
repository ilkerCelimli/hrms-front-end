import axios from 'axios'

export default class getAllBusinessAreas {


    getAllBusinessAreas(){
        return axios.get("http://localhost:8081/api/businessareas/getall")
    }

}