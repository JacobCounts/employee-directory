import React from "react";
import "./style.css"

function Table(props) {
  return (
    <table style={{ width: "90%" }}>
      <thead>
        <tr>
          <th></th>
          <th>
            Name{" "}
            <button className="filter" onClick={props.sortName}>
              <i className="fas fa-sort"></i>
            </button>
          </th>
          <th>
            Phone Number{" "}
            <button className="filter" onClick={props.sortNumber}>
              <i className="fas fa-sort"></i>
            </button>
          </th>
          <th>
            Email{" "}
            <button className="filter" onClick={props.sortEmail}>
              <i className="fas fa-sort"></i>
            </button>
          </th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((user) => (
          <tr style={{ borderTop: "2px solid black" }}>
            <td>
              <img style={{padding: "2px"}}src={user.picture.thumbnail} alt="profile" />
            </td>
            <td>
              {user.name.first} {user.name.last}
            </td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>
              {user.location.state}, {user.location.country}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
