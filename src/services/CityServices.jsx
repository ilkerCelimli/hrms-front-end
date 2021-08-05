import axios from 'axios'


export class CityServices{

    getCities() {
       return axios.get("http://localhost:8081/v1/Cities/getCities")
    }

}