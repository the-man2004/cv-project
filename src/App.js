import React from "react";
import "./styles/app.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Footer />
      </div>
    )
  }
}

export default App;
