import React, { useEffect, useState, Fragment } from "react";
import { fetchUsers } from "./data";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData();
  }, []);
  const group1 = users.filter((u) => u.dob.age <= 30);
  const group2 = users.filter((u) => u.dob.age > 30 && u.dob.age <= 50);
  const group3 = users.filter((u) => u.dob.age > 50);

  return (
    <div className="App">
      <h1>Random User Data</h1>

      <div className="category">
        <h2>Category 1 — Ages ≤ 30</h2>
        <Fragment>
          {group1.map((user, i) => (
            <div key={i} className="card">
              <img src={user.picture.large} alt={user.name.first} />
              <p>
                <strong>
                  {user.name.first} {user.name.last}
                </strong>
              </p>
              <p>Age: {user.dob.age}</p>
              <p>{user.location.country}</p>
            </div>
          ))}
        </Fragment>
      </div>

      <div className="category">
        <h2>Category 2 — Ages 31–50</h2>
        <Fragment>
          {group2.map((user, i) => (
            <div key={i} className="card">
              <img src={user.picture.large} alt={user.name.first} />
              <p>
                <strong>
                  {user.name.first} {user.name.last}
                </strong>
              </p>
              <p>Age: {user.dob.age}</p>
              <p>{user.location.country}</p>
            </div>
          ))}
        </Fragment>
      </div>

      <div className="category">
        <h2>Category 3 — Ages 51+</h2>
        <Fragment>
          {group3.map((user, i) => (
            <div key={i} className="card">
              <img src={user.picture.large} alt={user.name.first} />
              <p>
                <strong>
                  {user.name.first} {user.name.last}
                </strong>
              </p>
              <p>Age: {user.dob.age}</p>
              <p>{user.location.country}</p>
            </div>
          ))}
        </Fragment>
      </div>
    </div>
  );
}

export default App;
