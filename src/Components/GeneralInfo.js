import React, { Component } from 'react'

export default class GeneralInfo extends Component {


  render() {
    return (
        <h2>
            General Info
            <form>
                <input placeholder="First Name" name="firstName" type="text" onChange={(e) => this.props.changeInput(e)}></input>
                <input placeholder="Surname" name="lastName" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input placeholder="Address" name="address" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input placeholder="Email" name="email" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input placeholder="Phone" name="phone" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input placeholder="Description" name="description" type="text" onChange={(e) => this.props.changeInput(e)}></input>            
            </form>
        
        
        </h2>
    )
  }
}
