
import React from 'react';
// import image1 from './img1.png';
// import image2 from './img2.png';
import "bootstrap/dist/css/bootstrap.css";





class Empdet extends React.Component{

    constructor(props){
        super(props);
         this.state = 0;
    }

    on=()=>{
        this.setState({counter : 1 })
    }

    off=()=>{
        this.setState({counter : 0 })
    }

    render(){
    return (
    <div>
    <button className="btn btn-success" style={{width:100,margin:20}} onClick= {this.on} >ON</button>
     {this.state.counter===1?<h2> &nbsp;&nbsp; BELLO</h2>:<p></p>}
    <button className="btn btn-danger" style={{width:100,margin:20}} onClick= {this.off} >OFF</button>

    {console.log("Button clicked"+this.state.counter)}
  </div>
            )}
}

export default Empdet
