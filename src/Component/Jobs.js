import React, { Component } from 'react'
import Details from './Details.js'
import img from '../Assets/default.gif'

class Jobs extends Component{


  handledisplay(e){
    e.preventDefault()
    console.log(this.props.parentstyle);
    this.props.parentstyle("block")
  }

  renderJobs(job,i){
    return(
        <div key={i} className="Jobitems">
          <button style={{height: '100%', width:'100%'}} onClick={(e) => this.handledisplay(e)}>
            {job.title}<br></br>
            {job.type.name}<br></br>
            {job.company.location.name}<br></br>
            {job.company.name}<br></br>
            {job.post_date}
            <a href={job.apply_url}>Apply</a>
          </button>
        </div>
    )
  }

  render(){
    const jobs = this.props.jobs
    return(
      <div className="Jobitem">
        {jobs.map((job,i) => this.renderJobs(job,i))}
      </div>
    )
  }
}
export default Jobs
