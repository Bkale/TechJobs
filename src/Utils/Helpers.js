import axios from "axios";
export default {

searchAuthenticJobs: function(data){
  console.log("Backend");
    return axios.post('http://localhost:3000/techjobs',data)
  }
}
