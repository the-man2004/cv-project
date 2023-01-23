import React, { Component } from "react";
import "../styles/header.css";

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header>
                <p className="header-p">CV Application</p>
            </header>
        )
    }
}

export default Header;