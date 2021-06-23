import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

class Demo extends React.Component{

constructor(props){
    super(props);
    this.state={cname:'Ajay'}
}

change=()=>{
    this.setState({cname:'More'})
}
    render(){
        return(
            <>
            <button className="btn btn-warning" onClick={this.change}>Click here</button>
            <div className="bb">
            <h1 className="bb">{this.state.cname}</h1>
            </div>
            </>
        )
    }
}

export default Demo