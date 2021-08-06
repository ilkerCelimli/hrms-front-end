import axios from 'axios'


export class CityServices{

    async getCities() {
       return await axios.get("http://localhost:8081/v1/Cities/getCities")
    }

}