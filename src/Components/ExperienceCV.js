import React, { Component } from 'react'

export default class ExperienceCV extends Component {
  render() {
    return (
        <div className="experience section">
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
    )
  }
}
