import React from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Ax extends React.Component{
    constructor(){
        super()
        this.state={c:[]}
    }

    componentDidMount=()=>{
        axios.get('https://jsonplaceholder.typicode.com/users').then(result=>this.setState({customers:result.data}))
    }

    render(){
        return(
           
            <>
            <table style={{width:'50%'}} className='table'>
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.customers?this.state.customers.map(c=>{
                        return(<tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.id}</td>
                            <td>{c.email}</td>
                            <td>{c.address.geo.lat}, {c.address.city}</td>
                        </tr>)
                    }):<tr><td>Hey no data is available </td></tr>}
                </tbody>
            </table>
            </>
        )
    }
}
