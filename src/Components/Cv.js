import React, { Component } from 'react'


export default class Cv extends Component {

    render() {
        return (
        <div id="cv">
            <div className="general-info section">
                General info
                <div className="item">{this.props.firstName}</div>
                <div className="item">{this.props.lastName}</div>
                <div className="item">{this.props.address}</div>
                <div className="item">{this.props.email}</div>
                <div className="item">{this.props.phone}</div>
                <div className="item">{this.props.description}</div>
            </div>
            <div className="education section">
                Education
                <div className="item">{this.props.schoolName}</div>
                <div className="item">{this.props.title}</div>
                <div className="item">{this.props.dates}</div>
            </div>
            <div className="experience section">
                Experience
                <div className="item">{this.props.companyName}</div>
                <div className="item">{this.props.position}</div>
                <div className="item">{this.props.startDate}</div>
                <div className="item">{this.props.finishDate}</div>
            </div>
        </div>
        )
    }
}
