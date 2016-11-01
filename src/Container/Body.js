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
      jobs: []
    }
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
        jobs: res.data.rsp.listings.listing
      })
    })
  }

  render(){
    const location = {
      lat: 40.7575285,
      lng: -73.9884469
    }
    return(
      <div className="Body-Container">
        <form>
          <input type="text" onChange={(e) => this.handleChange(e)}></input>
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button>
        </form>
        <div className="Display">
            <div className="Maps">
              <Maps center={location} markers={this.state.venues}/>
            </div>

            <div className="Jobs">
              <Jobs jobs={this.state.jobs} />
            </div>
        </div>
      </div>
    )
  }
}
export default Body
