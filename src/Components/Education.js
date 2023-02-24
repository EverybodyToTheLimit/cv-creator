import React, { Component } from 'react'

export default class Education extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         schoolName: "",
         title: "",
         dates: ""
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
            Education
            <form>
                <input name="schoolName" onChange={this.changeInput}></input>
                <input name="title" onChange={this.changeInput}></input>
                <input name="dates" onChange={this.changeInput}></input>
            </form> 
        </div>
    )
  }
}
