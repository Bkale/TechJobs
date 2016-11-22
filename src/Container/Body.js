import React, { Component } from 'react'
import Maps from "../Component/Maps.js"
import Jobs from "../Component/Jobs.js"
import Helpers from "../Utils/Helpers.js"

class Body extends Component{
  constructor(){
    super();
    this.state = {
      searchword: "",
      searchlocation:"",
      venues:[],
      jobs: [],
      location: {
        lat: 40.7400081,
        lng: -73.9897434
      },
      jobsDisplay: "none"
    }
  }

  componentDidMount(){
    const geolocation = (navigator.geolocation ? navigator.geolocation : console.log("geolocation failed"));
    geolocation.getCurrentPosition((position) => {
      this.setState({
        location:{
          lat:position.coords.latitude,
          lng:position.coords.longitude
        }
      })
      })
  }

  handleSearchWordChange(e){
    e.preventDefault()
    this.setState({
      searchword: e.target.value
    })
  }

  handleSearchLocationChange(e){
    e.preventDefault()
    this.setState({
      searchlocation: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    const params = { searchword: this.state.searchword, location:this.state.searchlocation}
    Helpers.searchAuthenticJobs(params).then((res) =>{
      this.setState({
        venues: res.data.rsp.listings.listing,
        jobs: res.data.rsp.listings.listing,
        jobsDisplay: "block"
      })
    })
  }



  render(){
    return(
      <div className="Body-Container">

        <form>
          <input className="Textbox" type="text" onChange={(e) => this.handleSearchWordChange(e)} placeholder="PHP, React, Web developer" />
          <input className="Textbox" type="text" onChange={(e) => this.handleSearchLocationChange(e)} placeholder="city or state" />
          <button className="Submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>

        <div className="Display">
            <div className="Maps">
              <Maps center={this.state.location} markers={this.state.venues} searchword={this.state.searchword} />
            </div>
              <div className="Jobs" style={{display:this.state.jobsDisplay}}>
                <Jobs jobs={this.state.jobs} />
              </div>
        </div>
      </div>
    )
  }
}
export default Body
