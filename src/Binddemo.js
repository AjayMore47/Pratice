
import React from 'react';
import image1 from './img1.png';
import image2 from './img2.png';
import "bootstrap/dist/css/bootstrap.css";
const emp1={
  "empId":100,
  "empName":"Jack",
  "age":30,
  "salary":50000
};
const emp2={
  "empId":101,
  "empName":"Jane",
  "age":24,
  "salary":40000
};
function getEmployeeDetails(){
  const element=(
    <div>
    <h3 className="text-center text-primary">Employee Details</h3>

    <div className="card" style={{"width":200}}>
    <img className="card-img-top" src={image1} height="200" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title text-center">{emp1.empName}</h5>
      <p className="card-text">
      <p>Id: {emp1.empId}</p>
      <p>Age: {emp1.age}</p>
      <p>Salary: {emp1.salary}</p>
      </p>
      <button type="button" className="btn btn-primary">Edit Details</button>
    </div>
    </div>

    <div className="card" style={{"width":200}}>
    <img className="card-img-top" src={image2} height="200" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title text-center">{emp2.empName}</h5>
      <p className="card-text">
      <span>Id: {emp2.empId}</span><br/>
      <span>Age: {emp2.age}</span><br/>
      <span>Salary: {emp2.salary}</span><br/>
      </p>
      <button type="button" className="btn btn-primary">Edit Details</button>
    </div>
    </div>
  </div>
  )
  return element;
}

export default getEmployeeDetails
