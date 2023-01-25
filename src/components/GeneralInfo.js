import React, { Component } from "react";

class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <p className="title">Personal information</p>
                <form onSubmit={this.props.generalInfoSubmit} className="form">
                    <input placeholder="Full name" id="input-name" type="text" onChange={this.props.handleName}/>
                    <input placeholder="Email" id="input-email" type="email" onChange={this.props.handleEmail} />
                    <input placeholder="Phone number" id="input-number" type="text" onChange={this.props.handleNumber} />

                    <input className="btn" type="submit" value="Add" />
                    <input className="btn" type="button" value="Delete" onClick={this.props.generalInfoDelete} />
                </form>
            </div>
        )
    }
}

export default GeneralInfo;