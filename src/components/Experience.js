import React, { Component } from "react";

class Experience extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <p className="title">Expereince</p>
                <form className="form" onSubmit={this.props.experienceAdd}>
                    <input id="input-position" placeholder="Position" type="text" onChange={this.props.handlePosition} />
                    <input id="input-company" placeholder="Company" type="text" onChange={this.props.handleCompany} />
                    <input id="input-city" placeholder="City" type="text" onChange={this.props.handleCity} />
                    <input id="input-form" placeholder="From" type="text" onChange={this.props.handleFrom} />
                    <input id="input-to" placeholder="To" type="text" onChange={this.props.handleTo} />

                    <input className="btn" value="Add" type="submit" />
                    <input className="btn" value="Delete" type="button" onClick={this.props.experienceDelete} />
                    <input className="btn" value="Clear" type="button" onClick={this.props.clear} />
                </form>
            </div>
        )
    }
}

export default Experience;