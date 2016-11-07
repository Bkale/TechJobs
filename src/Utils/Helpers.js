import axios from "axios";
export default {

searchAuthenticJobs: function(data){
  console.log("Backend");
    return axios.post('https://floating-everglades-94662.herokuapp.com/techjobs',data)
  }
}
