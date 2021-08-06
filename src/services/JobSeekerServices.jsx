import axios from 'axios'

export class JobSeekerServices {

  async  addJobSeeker(data){

        return await axios.post("http://localhost:8081/api/v1/jobseeker/v1/insert/", data)
    }

     async addGithub(data,id) {
        return await axios.put("http://localhost:8081/api/v1/jobseeker/v1/githubAccount/"+ id + "/" , data)
    }

     async addLinkedLn(data,id){
        return await axios.put("http://localhost:8081/api/v1/jobseeker/v1/linkedlnAccount/" + id + '/' ,data)
    }
}