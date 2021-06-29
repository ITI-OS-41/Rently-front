import React, { useState, useEffect } from "react";
import ItemCard from "../../posting/Sections/ItemCard";
import { get } from "functions/request";

export default function Request() {
  const [rent, setRent] = useState([]);
  const id = localStorage.getItem("rently-userid");

  useEffect(() => {
    get(`/rent?status=pending&renter=${id}`)
      .then((response) => {
        let res = response.data.res;
        setRent(res);
        console.log("current rental Request data res----> ", res);
      })
      .catch((err) => {});
  }, []);

  return (
    <div>
      {rent.length ? (
        <ItemCard rent={rent} />
      ) : (
        <h4
          style={{
            textAlign: "center",
            backgroundColor: "tomato",
            padding: "10px 0px",
            borderRadius: "5px",
          }}
        >
          You have not requested any item yet.
        </h4>
      )}
    </div>
  );
}
