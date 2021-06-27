import axios from "axios";

export default class getAllSectors{
    getAllSectors(){
        return axios.get("http://localhost:8081/gettallactivesectordate" )
    }
}