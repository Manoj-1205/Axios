import React, { useState } from "react";
import Get from "./axios/get";
import axios from "axios";
/*
const Formdata = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [check, setcheck] = useState(false);
  const validate = () => {
    setcheck(true);
  };
  return (
    <>
      <form onSubmit={validate}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="button">Add to Server</button>
      </form>
    </>
  );
};
*/
const Main = () => {
  const [cond, setCond] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [check, setcheck] = useState(false);
  const [id, setId] = useState(null);
  const [infofromserver, setInfo] = useState("");

  const validate = () => {
    setcheck(true);
  };
  const getRequest = () => {
    setCond(!cond);
  };

  async function Get() {
    const res = await axios
      .get("http://localhost:3010/employees/")
      .catch((error) => console.log("Error : " + error));
    const data = res.data;
    //setInfo(JSON.parse(data));
    console.log("Get Response from server : " + JSON.stringify(data));
    //console.log("Server data : " + { infofromserver });
    return <h2>{data}</h2>;
  }
  async function Post() {
    const payload = {
      first_name: fname,
      last_name: lname,
      email: email,
    };
    if (fname !== "" && lname !== "" && email !== "") {
      const res = await axios.post("http://localhost:3010/employees", payload);
      const data = res.data;
      console.log("Response from server : " + JSON.stringify(data));

      alert("Successfully added to the server.");
    } else {
      alert("Please fill all the items..");
    }
    return (
      <>
        <p>Async</p>
      </>
    );
  }
  async function Delete() {
    const del = await axios.delete("http://localhost:3010/employees/" + id);
  }
  return (
    <div>
      <h1>Working with axios</h1>
      <button onClick={() => Get()}>Get All data</button>&nbsp;&nbsp;
      <br />
      <br />
      <br />
      <h3>Updating data</h3>
      <br />
      <form onSubmit={validate}>
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFname(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLname(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="button" onClick={() => Post()}>
          Add to Server
        </button>
        &nbsp;&nbsp;
        <button type="reset">Reset</button>
      </form>
      <br />
      <br />
      <h3>Deleting data based on ID</h3>
      <form onSubmit={Delete}>
        <input
          type="text"
          placeholder="Enter Id"
          onChange={(e) => setId(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Delete</button>
      </form>
      <br />
      <h4>Diplaying data fetched from server</h4>
    </div>
  );
};
//  {cond ? <Get /> : null}
export default Main;
