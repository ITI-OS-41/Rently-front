import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import {
  title,
  cardTitle,
  coloredShadow,
  
} from "assets/jss/material-kit-pro-react.js";
import PostItemCard from "./PostItemCard";

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
};
const useStyles = makeStyles(sectionInterestedStyle);


export default function SectionPills({ items }) {


  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer>
        {items.map((item) => (
          <GridItem xs={12} sm={4} md={4} lg={4} xl={4}>
            <PostItemCard item={item}/>
          </GridItem>
        ))}
      </GridContainer>
    </div>
  );
}
