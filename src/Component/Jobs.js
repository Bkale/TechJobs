import React, { Component } from 'react'

class Jobs extends Component{

  renderJobs(job,i){
    console.log(job);
    return(
      <div key={i} className="Jobitems">
        {job.title}<br></br>
        {job.type.name}<br></br>
        {job.company.location.name}<br></br>
        {job.company.name}<br></br>
        {job.post_date}
      </div>
    )
  }

  render(){
    console.log("JOBS", this.props.jobs);
    const jobs = this.props.jobs
    return(
      <div className="Jobitem">
        {jobs.map((job,i) => this.renderJobs(job,i))}
        </div>
    )
  }
}
export default Jobs
