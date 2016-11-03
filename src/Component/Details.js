import React, { Component } from 'react'

class Details extends Component{
  handleit(e){
    e.preventDefault()
    this.props.close(e);
  }

  render(){
    const jobdetails = this.props.jobdetail
    const description = this.props.jobdetail.description ? this.props.jobdetail.description.replace(/<\/?[^>]+(>|$)/g, "") : "";
    console.log(jobdetails);
    return(
      <div className="Job-desc">
        <div className="Details_header">
          <button className="Details_close" onClick={(e)=>this.handleit(e)}>X</button>
          <h3 className="Details_title">{jobdetails.title ? jobdetails.title : ""}</h3>
        </div>
        <p className="DetailsText">{description ? description : ""}</p><br></br>
        <button className="Apply"><a href={jobdetails.apply_url}>Apply</a></button>
      </div>
    )
  }
}
export default Details
