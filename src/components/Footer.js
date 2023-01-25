import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p className="footer-p">Copyright © 2023 <a className="footer-a" href="https://github.com/the-man2004">the-man2004</a></p>
            </footer>
        )
    }
}

export default Footer;