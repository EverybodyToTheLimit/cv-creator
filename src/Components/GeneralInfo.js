import React, { Component } from 'react'

export default class GeneralInfo extends Component {


  render() {
    return (
        <div>
            General Info
            <form>
                <input name="firstName" type="text" onChange={(e) => this.props.changeInput(e)}></input>
                <input name="lastName" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input name="address" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input name="email" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input name="phone" type="text" onChange={(e) => this.props.changeInput(e)}></input> 
                <input name="description" type="text" onChange={(e) => this.props.changeInput(e)}></input>            
            </form>
        
        
        </div>
    )
  }
}
