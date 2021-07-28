import axios from 'axios'

export class JobSeekerServices {

    addJobSeeker(data){

       return axios.post("http://localhost:8081/api/v1/jobseeker/v1/insert/", data)
    }

    addGithub(data,id) {
        return axios.put("http://localhost:8081/api/v1/jobseeker/v1/githubAccount/"+ id + "/" , data)
    }

    addLinkedLn(data,id){
        return axios.put("http://localhost:8081/api/v1/jobseeker/v1/linkedlnAccount/" + id + '/' ,data)
    }
}