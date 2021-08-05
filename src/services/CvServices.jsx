
import axios from 'axios'

export default  class CvServices {


    updateCv(data) {

        return axios.post("http://localhost:8081/api/v1/jobseekercv/addCv/1/" + data)

    }


}