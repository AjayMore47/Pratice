import React from'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
// import Routing from './Routing';

export default class Vali extends React.Component{
    
  render(){
      return(
          <Router>
              <>
          <Link to="/home">1.Home</Link>
          <Link to="/registration"> 2.Registration</Link>
          <Link to="/about library"> 3.About</Link> 
          <Route path="/home" component={Home}></Route>
          <Route path="/registration" component={Registration}></Route>
          <Route path="/about library" component={About}></Route>
          
          </>
          </Router>
      )
  }
}
class Home extends React.Component{
    render(){
        return(
            <h2 className="text-center">Home Page</h2>
        )
    }
}
class About extends React.Component{
    render(){
        return(
            <h2 className="text-center">About Page</h2>
        )
    }
}

class Registration extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            formValue:{
          txtUsername: "",
          mailId:'',
          phoneNumber:'',
          bRange:'',
          availBooks:''
            },
          formErrors: {
              txtUsernameErr:'',
              emailErr:'' 
                },
          fieldValidity: {
                txtUsername: false,
                email:false
                },
          formValid: false
        };
       }

    handle=((event)=>{
event.preventDefault()
alert('subbbbbbbb')
    })

       validate = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //console.log(name + " "+value)
        var formErrors = this.state.formErrors;
        var fieldValidity = this.state.fieldValidity;
        const formValue = this.state.formValue;
        
        this.setState({formValue : {...formValue,[name]: value}});
    if(name==="txtUsername")
      {
      if(value==="")
      {
        formErrors.txtUsernameErr = "please provide name";
        fieldValidity.txtUsername=false;
      }
      else if(value.length<5){
        formErrors.txtUsernameErr = "name should not be less than 5";
        fieldValidity.txtUsername=false;
      }
      else {
        formErrors.txtUsernameErr = "";
        fieldValidity.txtUsername = true;
      }
    }

    else if(name === "emailId")
    { if(value.match(/[A-Z]/)&&value.match(/[a-z]/)&&value.match(/[0-9]/)&&value.match(/[@#$%^&*]/)&&value.length>=8 && value.length<=15)
    {
        formErrors.emailErr = "";
        fieldValidity.email = true;
      }
    else {
        formErrors.emailErr = "email should not be less than 8 and greater than 14";
        fieldValidity.email = false;
    }
    }      
    
    var formValid=fieldValidity.txtUsername && fieldValidity.email;
      this.setState({ formErrors: formErrors });
      this.setState({ fieldValidity: fieldValidity});
      this.setState({ formValid : formValid});
       };
    
    render(){
        return(
          
            < div style={{width: 500, margin: '0px auto'}}>
               
               {/* <img src="flowerimg.jpg" height="100" alt="image not found"></img> */}
                <h3 className="text-cente" ><i>Registration Form</i></h3>
               
            <form onSubmit={this.handle}>
              <lable for="textUserName">Name: </lable>
              <input type="text" name="txtUsername" value={this.state.txtUsername}
                onChange={this.validate}/><br/>
                <span id="errorMsg">{this.state.formErrors.txtUsernameErr}</span><br/><br/>

               <lable for="emailId">Mail Id: </lable>
              <input type="email" name="emailId" value={this.state.emailId} 
                onChange={this.validate}/><br/><br/>
                <span id="errorMsg">{this.state.formErrors.emailErr}</span><br/>

               <lable for="phoneNumber">Phone Number: </lable>
              <input type="number" name="phoneNumber" value={this.state.phoneNumber}/><br/><br/>
                
                 <lable for="bRange">Books no range: </lable>
                 <select id="bRange">
                     <option>1-4</option>
                     <option>4-8</option>
                     <option>&gt; 8</option>
                 </select><br/><br/>

                 <lable for="availBooks">Reasons To Avail Books: </lable>
              <textarea rows="3" cols="20" name="availBooks" value={this.state.availBooks}/><br/><br/>

              <button className="btn btn-primary" disabled={!this.state.formValid}>SUBMIT</button>
            </form>
            </ div>
    
        )
    }
}
