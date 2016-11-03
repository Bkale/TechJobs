import React, { Component } from 'react'
import { Link } from 'react-router'
import Details from './Details.js'
import img from '../Assets/default.gif'

class Jobs extends Component{
  constructor(){
    super();
    this.state = {
      detailsDisplay: "none",
      position:"absolute",
      jobdetail: [],
      JobsContainerWidth: "35vw"
    }
  }

  handleClose(e){
    e.preventDefault()
    this.setState({
      detailsDisplay: "none",
      JobsContainerWidth: "35vw"
    })
  }

  handledisplay(e,jobs){
    e.preventDefault()
    this.setState({
      detailsDisplay: "block",
      position:"relative",
      jobdetail: jobs,
      JobsContainerWidth: "71vw"
    })
  }

  renderJobs(job,i){
    return(
        <div key={i} className="Jobitems">
          <button style={{height: '100%', width:'100%'}} onClick={(e) => this.handledisplay(e,job)}>
            <h3>Job Tilte: {job.title}</h3>
            <h4>Company: {job.company.name}</h4>
            Duration: {job.type.name}<br></br>
            Location: {job.company.location.name}<br></br>
            {job.post_date}job.apply_url
          </button>
        </div>
    )
  }

  render(){
    const jobs = this.props.jobs
    return(
      <div className="JobsContainer" style={{width:this.state.JobsContainerWidth}}>
        <div className="Jobitem">
          {jobs.map((job,i) => this.renderJobs(job,i))}
        </div>
        <div className="Details" style={{display:this.state.detailsDisplay,position:this.state.position}}>
          <Details jobdetail={this.state.jobdetail} close={this.handleClose.bind(this)}/>
        </div>
      </div>
    )
  }
}
export default Jobs
