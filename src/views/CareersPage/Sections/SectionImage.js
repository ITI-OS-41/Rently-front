/*eslint-disable*/
import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import ecommerceHeader from "assets/img/dg9.jpg";

import {
  title,
  main,
  mainRaised,
  container,
  description,
  blackColor,
  whiteColor,
  hexToRgb,
} from "assets/jss/material-kit-pro-react.js";
import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.js";

const styles = {
  ...imagesStyles,
  title,
  main,
  mainRaised,
  description: {
    ...description,
    color: blackColor ,
  },
  textCenter: {
    textAlign: "center !important",
  },
  container: {
    ...container,
    zIndex: "2",
  },
 
  subscribeLine: {
    padding: "1.875rem 0px",
    "& $card": {
      marginTop: "30px",
    },
    "&$subscribeLineImage:after": {
      position: "absolute",
      zIndex: 1,
      width: "100%",
      height: "100%",
      display: "block",
      left: 0,
      top: 0,
      content: "''",
      backgroundColor: "rgba(" + hexToRgb(blackColor) + ",0.66)",
    },
  },
  subscribeLineImage: {
    position: "relative",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    "& $container": {
      zIndex: 2,
      position: "relative",
    }
    
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  section: {
    margin: "0",
  },
  layout: {
    backgroundColor: "rgba(" + hexToRgb(whiteColor) + ",0.76)",
    padding: "50px 30px 30px ",
    marginTop: "50px",
    marginBottom: "50px",
  }
};

const useStyles = makeStyles(styles);

export default function SectionImage() {
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.subscribeLine, classes.subscribeLineImage)}
      style={{ backgroundImage: `url(${ecommerceHeader})`, margin: "80px 0" }}
    >
      <div className={classes.container+" "+classes.layout}>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
            Each one of these pillars makes Rently an exhilarating place to work. We’re doing something entirely new. If you’re eager to be part of a fast-growing startup that creates opportunity and thrives on innovation, you’ve come to the right place.
            <br />
            At Rently, you’ll work autonomously in a fast-paced, remote environment.
            </p>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <p className={classes.description}>
            You’ll approach every day with a customer first mentality and always be encouraged to bring your ideas and creativity to the table.
            <br />
            Working at Rently means having the freedom to try new things, and make mistakes. If you’re curious, and passionate about perpetual growth, we want to hear from you.
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
