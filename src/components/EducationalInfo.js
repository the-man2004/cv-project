import React, { Component } from "react";

class EducationalInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <p className="title">Education</p>
                <form className="form" onSubmit={this.props.educationalSubmit}>
                    <input id="input-school-name" placeholder="School name" type="text" onChange={this.props.handleSchoolName} />
                    <input id="input-title-of-study" placeholder="Title of study" type="text" onChange={this.props.handleTitleOfStudy} />
                    <input id="input-date-of-study" placeholder="Date of study" type="text" onChange={this.props.handleDateOfStudy} />

                    <input className="btn" type="submit" value="Add" />
                    <input className="btn" type="button" value="Delete" onClick={this.props.educationalDelete} />
                </form>
            </div>
        )
    }
}

export default EducationalInfo;