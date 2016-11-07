import axios from "axios";
export default {

searchAuthenticJobs: function(data){
  console.log("Backend");
    return axios.post('https://git.heroku.com/floating-everglades-94662.git/techjobs',data)
  }
}
