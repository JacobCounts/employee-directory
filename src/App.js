import React from "react";

const url = "https://randomuser.me/api/?results=200&nat=us";

class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    fetch(url)
    .then(data => data.json())
    .then(data => this.setState({ employees: data.results }));
  }

  render() {
    const { employees } = this.state;
    return (
      <>
      <table className="table">
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.login.uuid}>
              <td>
                <img src={employee.picture.thumbnail} alt="img"></img>
              </td>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.cell}</td>
              <td>{employee.dob.age}</td>
              <td>{employee.location.city}, {employee.location.state}</td>
            </tr>
          ))}
        </tbody>
        </table>
        </>
    );
  }
}


export default App;
