import React from 'react';
import { BrowserRouter as Router, Link,Route } from 'react-router-dom';

class Home extends React.Component{
    render()
    {
        return(
            <h1>Hey welcome to Home</h1>
        )
    }
  }

  function About(){
      return(
          <h1>About component</h1>
      )
  }

export default class State4 extends React.Component{
   
    // constructor(props){
    //     super(props);
    //     this.state={employeename:'',id:null};
    // }
    // submitHandler=(event)=>{
    //   event.preventDefault();
    //   alert("Hey you are submitting the form with "+this.state.employeename+" with employee id as : "+this.state.id);
    // }
    // changeHandler=(event)=>{
    //     let name=event.target.name;//id
    //     let val=event.target.value;//664321
    //     this.setState({[name]:val});
    // }
    
    render(){
        return(
            <>
            {/* <nav> */}
                <Router>
                <Link to="/home">Home||</Link>
                <Link to="/about">About||</Link>
                <Link to={'/contact'}> Contact </Link><br />
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                </Router>
            {/* </nav> */}
            {/* <form onSubmit={this.submitHandler}>
                <h1>Hey {this.state.employeename} </h1>
                <p>Enter the employee name</p>
                <input type="text" name="employeename" onChange={this.changeHandler} />
                <h1>Hey {this.state.id} </h1>
                <p>Enter your id</p>
                <input type="text" name="id" onChange={this.changeHandler} />
                <input type="submit" />
            </form> */}
            </>
        )
    }

}

// class Child1 extends React.Component{
//     render(){
//         return(
//         <>
//         Name: <input type="text" onChange={this.props.updateProp}/>
//         <h1>{this.props.userProp}</h1>
//         </>
//         )
//     }
// }

// export default class State4 extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={username:"Iwa"};
//     }
// updateState=(e)=>{
//     this.setState({username:e.target.value})
// }
//     render(){
//         return(
//          <>
//          Name: <input type="text" onChange={this.updateState}/>
//          <h1>{this.state.username}</h1>
//          </>   
//         )
//     }
// }