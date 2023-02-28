import React, { Component } from 'react'


export default class Cv extends Component {



    render() {
        return (
        <div id="cv">
            <div id="header">
                <h1 className="item">{this.props.firstName} {this.props.lastName}</h1>
            </div>
            <div className="left-side">
                <div className="description section">
                    <h3 className="heading">Description</h3>
                    <div className="item">{this.props.description}</div>
                </div>
                <div className="experience section">
                <h3 className="heading">Experience</h3>
                <div className="exp-section">
                    <div className="dates">
                        <div className="item">{this.props.startDate}</div>
                        <div className="item">{this.props.finishDate}</div>
                    </div>
                    <div className="exp-details">
                        <div className="item">{this.props.companyName}</div>
                        <div className="item">{this.props.position}</div>
                    </div>
                    </div>
                </div>
                <div className="education section">
                    <h3 className="heading">Education</h3>
                        <div className="item">{this.props.schoolName}</div>
                        <div className="item">{this.props.title}</div>
                        <div className="item">{this.props.dates}</div>

                </div>
            </div>
            <div className="right-side section">
                <h3 className="heading">General info</h3>
                <div className="item">{this.props.address}</div>
                <div className="item">{this.props.email}</div>
                <div className="item">{this.props.phone}</div>
            </div>
        </div>
        )
    }
}
