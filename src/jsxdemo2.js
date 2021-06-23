function generateTable() {
    var aGrade = []
    const students1 = [
      { sName: "Joey", marks: 42, grade:"A" },
      { sName: "Ross", marks: 47, grade:"A" }]
    const students2 = [
      {sName: "Chan", marks: 35 , grade:"B" },
      {sName: "Ted", marks: 38 , grade:"B" }]
      // aGrade array is populated using for loop
    for (let i = 0; i < students1.length; i++) {
      aGrade.push(
        <tr key={i}>
          <td>{students1[i].sName}</td>
          <td>{students1[i].marks}</td>
          <td>{students1[i].grade}</td>
        </tr>
      )
    }
    //bGrade array is populated using map function
    var bGrade = students2.map((student,index) => {
      return (
          <tr key={index}>
              <td>{student.sName}</td>
              <td>{student.marks}</td>
              <td>{student.grade}</td>
          </tr>
        )}
    )
    return (
      <div className="col-md-4 offset-4">
        <table className="table">
          <tbody>
            <tr><td>Name</td><td>Marks</td><td>Grade</td></tr>
            {aGrade}
            {bGrade}
          </tbody>
        </table>
      </div>
      )
  }

  export default generateTable
