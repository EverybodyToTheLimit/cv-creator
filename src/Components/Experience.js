import React, { Component } from 'react'

export default class Experience extends Component {

  render() {
    return (
        <div>
        Experience
        <form>
            <input name="companyName" type="text" onChange={(e) => this.props.changeInput(e)}></input>
            <input name="position" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
            <input name="startDate" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
            <input name="finishDate" type="text" onChange={(e) => this.props.changeInput(e)}></input>           
        </form>
    
    
    </div>
    )
  }
}
