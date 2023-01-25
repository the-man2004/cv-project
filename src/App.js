import React from "react";
import "./styles/app.css";
import "./styles/info.css";
import Header from "./components/Header.js";
import GeneralInfo from "./components/GeneralInfo.js";
import EducationalInfo from "./components/EducationalInfo";
import Experience from "./components/Experience";
import DisplayInfo from "./components/DisplayInfo";
import Footer from "./components/Footer.js";


let name = "";
let email = "";
let number = "";

let schoolN = "";
let titleOfS = "";
let dateOfS = "";

let positionE = "";
let companyE = "";
let cityE = "";
let fromE = "";
let toE = "";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      number: "",

      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",

      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    }

    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.generalInfoSubmit = this.generalInfoSubmit.bind(this);
    this.generalInfoDelete = this.generalInfoDelete.bind(this);

    this.handleSchoolName = this.handleSchoolName.bind(this);
    this.handleTitleOfStudy = this.handleTitleOfStudy.bind(this);
    this.handleDateOfStudy = this.handleDateOfStudy.bind(this);
    this.educationalSubmit = this.educationalSubmit.bind(this);
    this.educationalDelete = this.educationalDelete.bind(this);

    this.handlePosition = this.handlePosition.bind(this);
    this.handleCompany = this.handleCompany.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleFrom = this.handleFrom.bind(this);
    this.handleTo = this.handleTo.bind(this);
    this.experienceAdd = this.experienceAdd.bind(this);
    this.experienceDelete = this.experienceDelete.bind(this);

    this.clear = this.clear.bind(this);
    
  }



  handleName(e) {
    name = e.target.value;
    console.log(name);
  }

  handleEmail(e) {
    email = e.target.value;
  }

  handleNumber(e) {
    number = e.target.value;
  }

  generalInfoSubmit(e) {
    e.preventDefault();
    this.setState({
      name: name,
      email: email,
      number: number,
    })
  }

  generalInfoDelete() {
    this.setState({
      name: "",
      email: "",
      number: "",
    })
  }



  handleSchoolName(e) {
    schoolN = e.target.value;
  }

  handleTitleOfStudy(e) {
    titleOfS = e.target.value;
  }

  handleDateOfStudy(e) {
    dateOfS = e.target.value;
  }

  educationalSubmit(e) {
    e.preventDefault();
    this.setState({
      schoolName: schoolN,
      titleOfStudy: titleOfS,
      dateOfStudy: dateOfS
    })
  }

  educationalDelete() {
    this.setState({
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",
    })
  }


  handlePosition(e) {
    positionE = e.target.value;
  }

  handleCompany(e) {
    companyE = e.target.value;
  }

  handleCity(e) {
    cityE = e.target.value;
  }

  handleFrom(e) {
    fromE = e.target.value;
  }

  handleTo(e) {
    toE = e.target.value;
  }

  experienceAdd(e) {
    e.preventDefault();
    this.setState({
      position: positionE,
      company: companyE,
      city: cityE,
      from: fromE,
      to: toE,
    })
  }

  experienceDelete() {
    this.setState({
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    })
  }



  clear() {
    this.setState({
      name: "",
      email: "",
      number: "",

      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: "",

      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    })
  }




  render() {
    return (
      <div className="app">
        <Header />
        <div className="main-container">
          <div className="input-area">
            <GeneralInfo
              handleName={this.handleName} 
              handleEmail={this.handleEmail} 
              handleNumber={this.handleNumber}

              generalInfoSubmit={this.generalInfoSubmit}
              generalInfoDelete={this.generalInfoDelete}
            />    
            <EducationalInfo 
              handleSchoolName={this.handleSchoolName}
              handleTitleOfStudy={this.handleTitleOfStudy}
              handleDateOfStudy={this.handleDateOfStudy}

              educationalSubmit={this.educationalSubmit}
              educationalDelete={this.educationalDelete}
            />
            <Experience 
              handlePosition={this.handlePosition}
              handleCompany={this.handleCompany}
              handleCity={this.handleCity}
              handleFrom={this.handleFrom}
              handleTo={this.handleTo}

              experienceAdd={this.experienceAdd}
              experienceDelete={this.experienceDelete}

              clear={this.clear}
            />
          </div>  
          <div className="output-area">
            <DisplayInfo
              name={this.state.name}
              email={this.state.email}
              number={this.state.number}
              
              schoolName={this.state.schoolName}
              titleOfStudy={this.state.titleOfStudy}
              dateOfStudy={this.state.dateOfStudy}
              
              position={this.state.position}
              company={this.state.company}
              city={this.state.city}
              from={this.state.from}
              to={this.state.to}
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
