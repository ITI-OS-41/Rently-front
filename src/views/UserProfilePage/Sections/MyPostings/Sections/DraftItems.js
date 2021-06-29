import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import { get } from "functions/request";
import DraftCard from "./DraftCard";


export default function DraftItems(props) {
  const id = localStorage.getItem("rently-userid");
  console.log("id-----", id);
  const [items, setItem] = useState([]);
  useEffect(() => {
    get(`/item/?isPublished=false&owner=${id}`)
      .then((response) => {
        let res = response.data.res;
        setItem(res);
        console.log("Draft item---> ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
      <div>
        {items.length ? (
          <DraftCard key={items._id} items={items} />
        ) : (
          <h4
            style={{
              textAlign: "center",
              backgroundColor: "tomato",
              padding: "10px 0px",
              borderRadius: "5px",
            }}
          >
            You do not have any Draft items.
          </h4>
        )}
      </div>
  );
}
