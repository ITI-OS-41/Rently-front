import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import { get } from "functions/request";
import PostCard from "./PostedCard";



export default function PostedItems(props) {
  const id = localStorage.getItem("rently-userid");
  console.log("id-----", id);
  const [items, setItem] = useState([]);
  useEffect(() => {
    get(`/item/?isPublished=true&owner=${id}`)
      .then((response) => {
        let res = response.data.res;
        setItem(res);
        console.log("Posted item---> ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
      <div>
        {items.length ? (
          <PostCard key={items._id} items={items} />
        ) : (
          <h4
            style={{
              textAlign: "center",
              backgroundColor: "tomato",
              padding: "10px 0px",
              borderRadius: "5px",
            }}
          >
            You do not have any Posted items.
          </h4>
        )}
      </div>

  );
}
