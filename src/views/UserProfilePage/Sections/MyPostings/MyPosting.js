import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { get } from "functions/request";
import ItemCard from "./Sections/ItemCard";

import {
  title,
  cardTitle,
  coloredShadow,
  grayColor,
} from "assets/jss/material-kit-pro-react.js";

const sectionInterestedStyle = {
  title,
  cardTitle,
  coloredShadow,
  textCenter: {
    textAlign: "center",
  },
  section: {
    backgroundPosition: "50%",
    backgroundSize: "cover",
    padding: "0",
  },
  description: {
    color: grayColor[0],
  },
  styling: {
    padding: "0",
    margin: "0",
  },
};
const useStyles = makeStyles(sectionInterestedStyle);

export default function MyPosting(props) {
  const id = localStorage.getItem("rently-userid");
  console.log("id-----",id);
  const [items, setItem] = useState([]);
  useEffect(() => {
    get(`/item/?isPublished=false&owner=${id}`)
      .then((response) => {
        let res = response.data.res;
        setItem(res);
        console.log("published item---> ", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h3 className={classes.title + " " + classes.textCenter}>Draft items</h3>
      <br />
      <GridContainer>
        {items.map((item) => {
            console.log("item photo ", item.photo)
          return (
            <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
              <ItemCard key={item._id} item={item} />
            </GridItem>
          );
        })}
      </GridContainer>
    </div>
  );
}
