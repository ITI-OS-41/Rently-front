import React, { useState, useEffect } from "react";
import { get } from "functions/request";
import ItemCard from "./ItemCard";
import ConfirmedList from "./ConfirmedList";

export default function Confirmed() {
  const [rent, setRent] = useState([]);
  const id = localStorage.getItem("rently-userid");

  useEffect(() => {
    get(`/rent?status=approved&owner=${id}`)
      .then((response) => {
        let res = response.data.res;
        setRent(res);
        console.log("current possting approved data res----> ", res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {rent.length ? (
        <ConfirmedList />
      ) : (
        <h4
          style={{
            textAlign: "center",
            backgroundColor: "tomato",
            padding: "10px 0px",
            borderRadius: "5px",
          }}
        >
          You do not have any confirmed item yet.
        </h4>
      )}
    </div>
  );
}
