import React, { Component } from 'react'
import Education from './Education'
import Experience from './Experience'
import GeneralInfo from './GeneralInfo'
import Cv from './Cv'


export default class App extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        companyName: "",
        position: "",
        startDate: "",
        finishDate: "",
        schoolName: "",
        title: "",
        dates: "",
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        description: "",
      }
    }




    changeInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value

        })
        
    }



    render() {
        return (
        <div id="container">
                <div className="form"> 
                    <GeneralInfo changeInput = {(e) => this.changeInput(e)} />
                    <h2>Experience</h2>
                    <Experience changeInput = {(e) => this.changeInput(e)}/>
                    <h2>Education</h2>
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