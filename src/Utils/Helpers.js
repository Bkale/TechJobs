import axios from "axios";
export default {

searchAuthenticJobs: function(data){
  console.log("Backend");
    return axios.post('http://floating-everglades-94662.herokuapp.com/techjobs',data)
  }
}
