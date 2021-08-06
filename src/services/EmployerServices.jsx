import axios from 'axios'

export default class EmployerService{
   async addEmployer(data) {

     
      return await  axios.post("http://localhost:8081/api/v1/Employer/v1/insertemployer",data)
    }

    async getAllEmploer(){
        return await axios.get("http://localhost:8081/api/v1/Employer/v1/getemployer")
    }

   async addJobAdvert(data) {
        return await axios.post("http://localhost:8081/api/v1/jobadvert/v1/addjobadvert/2",data)
    }
}