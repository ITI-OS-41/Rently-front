import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import { get } from "functions/request";
import PostCard from "./PostedCard";
import PostedItemList from "./PostedItemList";

export default function PostedItems(props) {
  const id = localStorage.getItem("rently-userid");
  console.log("id-----", id);

  return (
    <div>
      <PostedItemList />
    </div>
  );
}
