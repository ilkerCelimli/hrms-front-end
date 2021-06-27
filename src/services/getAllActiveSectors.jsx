import axios from 'axios'

export default class getAllActiveBusinessAreas{
getAllActiveBusinessAreas(){
    return axios.get("http://localhost:8081/getallactivesectors")
}
}