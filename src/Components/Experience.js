import React, { Component } from 'react'

export default class Experience extends Component {

constructor(props) {
  super(props)

  this.state = {
     companyName : "",
     position: "",
     startDate: "",
     finishDate: ""
  }
}

    changeInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }

  render() {
    return (
        <div>
        Experience
        <form>
            <input name="companyName" type="text" onChange={this.changeInput}></input>
            <input name="position" type="text" onChange={this.changeInput}></input> 
            <input name="startDate" type="text" onChange={this.changeInput}></input> 
            <input name="finishDate" type="text" onChange={this.changeInput}></input>           
        </form>
    
    
    </div>
    )
  }
}
