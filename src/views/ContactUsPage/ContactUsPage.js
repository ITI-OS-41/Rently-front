/*eslint-disable*/
import React, { useState, useRef } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Parallax from "components/Parallax/Parallax.js";

// core components
import Header from "../../components/global/Header.js";
import Footer from "../../components/global/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Contact from "./Sections/Contact.js";



import {
  container,
  title,
  main,
  mainRaised,
  mrAuto,
  whiteColor,
  mlAuto,
} from "assets/jss/material-kit-pro-react.js";

const aboutUsStyle = {
  main,
  mainRaised,
  mrAuto,
  mlAuto,
  container: {
    ...container,
    zIndex: 1,
  },
  title: {
    ...title,
    fontSize: "2.5em",
    "&, & + h4": {
      color: whiteColor,
    },
  },
  textCenter: {
    textAlign: "center",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
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
  
};
const useStyles = makeStyles(aboutUsStyle);


export default function ContactUsPage() {

  const classes = useStyles();
  return (
    <div>
      <Header />
      <Parallax
        image={require("assets/img/contact.jpg").default}
        filter="dark"
        small
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem
              md={8}
              sm={8}
              className={classNames(
                classes.mlAuto,
                classes.mrAuto,
                classes.textCenter
              )}
            >
              <h1 className={classes.title}>CONTACT US </h1>
              <h4>
                Rently was created to reduce the destructive environmental
                impact of traditional systems of production by keeping products
                and equipment in use for longer.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
                
      <Contact/>
      <Footer />
    </div>
  );
}
