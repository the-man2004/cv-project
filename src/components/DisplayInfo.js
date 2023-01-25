import React, { Component } from "react";
import "../styles/display.css";


class DisplayInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="display-container">
                <div className="display-header">
                    <p id="name">{this.props.name}</p>
                    <p id="title-of-study">{this.props.titleOfStudy}</p>
                </div>
                <div className="display-main">
                    <p id="experience">Experience</p>
                    <div className="underline"></div>

                    <p className="items">Position: {this.props.position}</p>
                    <p className="items">Company: {this.props.company}</p>
                    <p className="items">City: {this.props.city}</p>
                    <p className="items">From: {this.props.from}</p>
                    <p className="items">To: {this.props.to}</p>

                    <p id="education">Education</p>
                    <div className="underline"></div>

                    <p className="items">School: {this.props.schoolName}</p>
                    <p className="items">Title of study: {this.props.titleOfStudy}</p>
                    <p className="items">Date of study: {this.props.dateOfStudy}</p>

                    <p id="contact-information">Contact information</p>
                    <div className="underline"></div>

                    <p className="items">Email: {this.props.email}</p>
                    <p className="items">Number: {this.props.number}</p>

                </div>
                <div className="display-sidebar"></div>
            </div>
        )
    }
}

export default DisplayInfo;