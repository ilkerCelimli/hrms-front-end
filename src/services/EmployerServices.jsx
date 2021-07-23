import axios from 'axios'

export default class EmployerService{
    addEmployer(data) {

     
      return  axios.post("http://localhost:8081/api/v1/Employer/v1/insertemployer/",data)
    }

    getAllEmploer(){
        return axios.get("http://localhost:8081/api/v1/Employer/v1/getemployer")
    }

    addJobAdvert(data) {
        return axios.post("http://localhost:8081/api/v1/jobadvert/v1/addjobadvert/1",data)
    }
}