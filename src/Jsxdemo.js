

const empArray = [
    { empId: 100, empName: "Kirk", age: 30 },
    { empId: 101, empName: "James", age: 31 },
    { empId: 102, empName: "Robert", age: 32 },
    { empId: 103, empName: "Dave", age: 50 },
    { empId: 104, empName: "Rob", age: 40 }
  ]

// function gentable(){
//     return(
//       <table>
//         <tbody>
//         {empArray.map((m)=>
//           <tr key={m.empId}>
//             <td>{m.empId}</td>
//             <td>{m.empName}</td>
//             <td>{m.age}</td>
//           </tr>
//         )}
//         </tbody>
//       </table>
      
//     )
//   }
var arr=[]
function gen(){
    // for(var i=0;i<empArray.length;i++){
    //     arr.push(<div>
    //     <div>name{empArray[i].empName}</div>
    //     <div>age{empArray[i].age}</div>
    //     </div>)
        
    // }
    arr=empArray.map((g,i)=>{
        return(
        <div>
        <div key='empName'>name{g.empName}</div>
        <div key='age'>age{g.age}</div>
        </div>
        )
    })
    return arr
}

function gentable(){
    return(
        <>
        <h1>Details</h1>
        {gen()}
        </>
    )
}

export default gentable
