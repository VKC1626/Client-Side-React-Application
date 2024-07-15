import React, { useState, useEffect } from "react";

function Apidata() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="Api-data">
      <h1 style={{ color: "green" }}>Employees Data</h1>
      <div>
        {data.map((dataObj, index) => {
          return (
            <div>
              <ul>
                <li style={{ fontSize: 15, color: "black" }}>
                  Name = {dataObj.name}
                  <br />
                  Email = {dataObj.email}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Apidata;
