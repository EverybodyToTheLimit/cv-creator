import React, { Component } from 'react'
import Education from './Education'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'
import Cv from './Cv'


export default class App extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        schoolName: "",
        title: "",
        dates: "",
        companyName : "",
        position: "",
        startDate: "",
        finishDate: "",
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

    addExp = () => {
        
    }

    render() {
        return (
        <div id="container">
                <div className="form"> 
                    <GeneralInfo changeInput = {(e) => this.changeInput(e)} />
                    <Experience changeInput = {(e) => this.changeInput(e)} />
                    <button onClick={this.addExp()}>Add exp</button>
                    <Education changeInput = {(e) => this.changeInput(e)} />
                </div>
                <Cv
                    schoolName = {this.state.schoolName}
                    title = {this.state.title}
                    dates = {this.state.dates}
                    companyName = {this.state.companyName}
                    position = {this.state.position}
                    startDate = {this.state.startDate}
                    finishDate = {this.state.finishDate}
                    firstName = {this.state.firstName}
                    lastName = {this.state.lastName}
                    address = {this.state.address}
                    email = {this.state.email}
                    phone = {this.state.phone}
                    description = {this.state.description}
                />
        </div>
        )
    }
}