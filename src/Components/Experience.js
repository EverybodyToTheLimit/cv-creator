import React, { Component } from 'react'

export default class Experience extends Component {

  render() {
    return (
        <h2>
        Experience
        <form>
            <input placeholder="Company Name"name="companyName" type="text" onChange={(e) => this.props.changeInput(e)}></input>
            <input placeholder="Position Held"name="position" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
            <input placeholder="Start Date"name="startDate" type="date" onChange={(e) => this.props.changeInput(e)}></input> 
            <input placeholder="End Date" name="finishDate" type="date" onChange={(e) => this.props.changeInput(e)}></input>           
        </form>
    
    
    </h2>
    )
  }
}
