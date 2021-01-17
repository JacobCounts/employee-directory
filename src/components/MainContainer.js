import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./Table";

function MainContainer() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRandomUsers();
  }, []);

  async function getRandomUsers() {
    const result = await axios.get(
      "https://randomuser.me/api/?results=200&nat=us"
    );
    setUsers(result.data.results);
  }

  function getSearchResults() {
    const searchedUser = users.filter(
      (user) =>
        search.indexOf(user.name.first) > -1 ||
        search.indexOf(user.name.last) > -1
    );

    setUsers(searchedUser);
  }

  function clearSearch() {
    setSearch("");
    getRandomUsers();
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    getSearchResults();
  }

  function sortEmail() {
    const sorted = users.sort(function (item1, item2) {
      if (item1.email < item2.email) {
        return -1;
      }
      if (item1.email > item2.email) {
        return 1;
      }
      return 0;
    });

    setUsers([...sorted]);
  }

  function sortNumber() {
    const sorted = users.sort(function (item1, item2) {
      if (item1.phone < item2.phone) {
        return -1;
      }
      if (item1.phone > item2.phone) {
        return 1;
      }
      return 0;
    });

    setUsers([...sorted]);
  }

  function sortName() {
    const sorted = users.sort(function (item1, item2) {
      if (item1.name.first < item2.name.first) {
        return -1;
      }
      if (item1.name.first > item2.name.first) {
        return 1;
      }
      return 0;
    });

    setUsers([...sorted]);
  }

  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <div className="input-group mb-2" style={{width: "375px"}}>
        <input
          value={search}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="Search Employee"
        
        />
        <button className="btn btn-danger" onClick={clearSearch}>
          <i class="fas fa-window-close"></i>
        </button>
        <button
          onClick={handleFormSubmit}
          className="btn btn-primary"
          type="submit"
          id="button-addon2"
        >
          Search
        </button>
      </div>

      <Table
        list={users}
        sortEmail={sortEmail}
        sortNumber={sortNumber}
        sortName={sortName}
      />
    </div>
  );
}

export default MainContainer;
