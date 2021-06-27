import axios from 'axios'

export default class getAllJobSeeker{
    getAllJobSeeker(){
        return axios.get("http://localhost:8081/jobseeker/getall")
    }
}