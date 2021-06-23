import React from 'react';
// import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Educator extends React.Component {
    constructor(props){
      super(props);
       this.state = { counter:0 };
       }
       render(){
         return (
             <>
         <div> 
           accessing data const             
           </div>
           <Child data={this.state.counter}></Child>
           <li><a href="mailto:mad4746@gmail.com">Email</a></li>
           <div class="container">
            <h1 class="display-2">H1 heading looks like this</h1>
        <p class="text-center">Hey this is a new paragraph</p>
        <p class="text-success">Hey this transaction was a success</p> 
        <p class="text-primary">Hey this transaction was a success</p> 
        <p class="text-info">Hey this transaction was a success</p> 
        <p class="text-warning">Hey this transaction was a success</p> 
        <p class="text-danger">Hey this transaction was a success</p> 
        <p class="text-success">Hey this transaction was a success</p> 
        <p class="text-muted">Hey this transaction was a success</p> 
        
        <p class="text-capitalize">hey hOw aRE you?</p>
        <p class="text-uppercase">hey how are you?</p>
        <p class="text-lowercase">HEY how are you?</p>
    </div>
           </>
           )}
       };
  
  class Child extends React.Component{
    render(){
    return (
       <div>
       <h3> Accessing data{this.props.data}</h3>
       </div>);
      }
  }
export default Educator;
