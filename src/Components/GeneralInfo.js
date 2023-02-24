import React, { Component } from 'react'

export default class GeneralInfo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstName: "",
         lastName: "",
         address: "",
         email: "",
         phone: "",
         description: ""

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
            General Info
            <form>
                <input name="firstName" type="text" onChange={this.changeInput}></input>
                <input name="lastName" type="text" onChange={this.changeInput}></input> 
                <input name="address" type="text" onChange={this.changeInput}></input> 
                <input name="email" type="text" onChange={this.changeInput}></input> 
                <input name="phone" type="text" onChange={this.changeInput}></input> 
                <input name="description" type="text" onChange={this.changeInput}></input>            
            </form>
        
        
        </div>
    )
  }
}
