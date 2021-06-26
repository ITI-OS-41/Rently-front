import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { get } from "functions/request";

export default function Request() {
  const [rent, setRent] = useState([]);
  const id = localStorage.getItem("rently-userid");

  useEffect(() => {
    get(`/rent?status=pending&owner=${id}`)
      .then((response) => {
        let res = response.data.res;
        setRent(res);
        console.log("current posting Request data res----> ", res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {rent.length ? (
        <ItemCard rent={rent} />
      ) : (
      <h4 style={{textAlign: 'center', backgroundColor:"tomato", padding: '10px 0px', borderRadius: "5px"}}>You do not have any availability-check requests</h4>
    )}
  </div>
  );                                     
}
