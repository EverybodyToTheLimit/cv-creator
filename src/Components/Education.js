import React, { Component } from 'react'

export default class Education extends Component {


    render() {

    
    return (
        <div>
            Education
            <form>
                <input name="schoolName" onChange={(e) => this.props.changeInput(e)}></input>
                <input name="title" onChange={(e) => this.props.changeInput(e)}></input>
                <input name="dates" onChange={(e) => this.props.changeInput(e)}></input>
            </form> 
        </div>
    )
  }
}
