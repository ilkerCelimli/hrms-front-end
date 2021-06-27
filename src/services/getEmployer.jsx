import axios from 'axios'

export default class getAllEmployers {


    getAllBusinessAreas(){
        return axios.get("http://localhost:8081/Employer/getemployer")
    }

}