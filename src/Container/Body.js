import React, { Component } from 'react'
import Maps from "../Component/Maps.js"
import Jobs from "../Component/Jobs.js"
import Helpers from "../Utils/Helpers.js"

class Body extends Component{
  constructor(){
    super();
    this.state = {
      searchword: "",
      venues:[],
      jobs: [],
      location: {
        lat: 40.7400081,
        lng: -73.9897434
      },
      jobsdisplay: "none",
      detailsdisplay: "none"
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

  handleChange(e){
    e.preventDefault()
    this.setState({
      searchword: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const params = { searchword: this.state.searchword}
    Helpers.searchAuthenticJobs(params).then((res) =>{
      this.setState({
        venues: res.data.rsp.listings.listing,
        jobs: res.data.rsp.listings.listing,
        jobsdisplay: "block"
      })
    })
  }

  handleStyle(param){
    this.setState({
      detailsdisplay:param
    })
  }

  render(){
    return(
      <div className="Body-Container">

        <form>
          <input type="text" onChange={(e) => this.handleChange(e)} placeholder="HTML, CSS, React" />
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>

        <div className="Display">
            <div className="Maps">
              <Maps center={this.state.location} markers={this.state.venues}/>
            </div>

            <div className="TempContainer">
              <div className="Jobs" style={{display:this.state.jobsdisplay}}>
                <Jobs jobs={this.state.jobs} parentstyle={this.handleStyle.bind(this)}/>
              </div>
              <div className="Details" style={{display:this.state.detailsdisplay}} jobs={this.state.jobs}>
                hello
              </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Body
