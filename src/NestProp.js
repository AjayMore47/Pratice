import React from "react";


// import React from "react";
// import Employee from './Employee'
export default class NestProp extends React.Component {
  constructor() {
    super();
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }
  
    fetchEmployees = () =>{
      var employeeDetails = [
        {"bookName":"Dune","authorName":"Frank Herbert","achievements":"The story of a boy and a great family’s ambitious attempt to realize mankind’s most ancient and unattainable dream."},
        {"bookName":"Six Wakes","authorName":"Mur Lafferty","achievements":"A crew of clones awakens aboard a space ship to find they're being hunted-and any one of them could be the killer."},
        {"bookName":"Life of Pie","authorName":"Yann Martel","achievements":"An inspirational tale of survival, endurance, resilience and faith"},
    ]
      return employeeDetails.map(emp => <Employee key={emp.bookName} emp={emp} />)
    }
  render() {
    return (
      <div>
        <h3 className="text-success">Bestsellers 2018</h3>
        {this.fetchEmployees()}
      </div>
    );
  }
}



class Employee extends React.Component {
  constructor() {
    super();
    this.state = {
      achievements: null,
    };
  }
  render() {
    var note = null;
    var redirect = null;
    if (this.props.emp.age < 25) {
      console.log("In card, salary", this.props.emp.salary)
      note = <span className="text-info"> - Fresher</span>;
    }
    return (
      <div className="card" style={{ width: 200 }}>
        {/* <img
          className="card-img-top"
          src={require("./emp1.PNG")}
          height="200"
          alt="profile pic"
        /> */}
        <div className="card-body">
          <h5 className="card-title text-center">{this.props.emp.bookName}</h5>
          <p className="card-text">
            <span>Author: {this.props.emp.authorName}</span>
            {/* <br />
            <span>Age: {this.props.emp.age}</span> {note}
            <br />
            <span>Salary: {this.props.emp.salary}</span>
            <br /> */}
          </p>
          <p>
            <i>{this.state.achievements}</i>
          </p>
          <br />
          <button
            className="btn btn-primary"
            onClick={() => {
              this.setState({ achievements: this.props.emp.achievements });
            }}
          >
            Show Details
          </button>
          <br /><br />
          <button
            className="btn btn-danger"
            onClick={() => {
              this.setState({ achievements: null });
            }}
          >
            Hide Details
          </button>
          {redirect}
        </div>
      </div>
    );
  }
}
