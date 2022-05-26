import React from "react";
import axios from "axios";

async function Get() {
  const res = await axios.get("http://localhost:3010/employees");
  const data = res.data;
  console.log("Response from server : " + JSON.stringify(data));
}

export default Get;
