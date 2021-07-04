/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
// pages
import Form from "./Sections/Form";

import {
  cardTitle,
  blackColor,
  hexToRgb,
  description,
  mrAuto,
  mlAuto,
} from "assets/jss/material-kit-pro-react.js";

const signupPageStyle = {
  description: {
    ...description,
    color: "#000",
    margin: "10 auto"
  },
  cardWallet: {
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(" +
      hexToRgb(blackColor) +
      ", 0.14), 0 6px 30px 5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2);",
    marginBottom: "50px",
  },
  cardTitle: {
    ...cardTitle,
    textDecoration: "none",
    textAlign: "center !important",
    marginTop: "0 !important",
    color: "#FFF !important",
    backgroundColor: "#3f3f3f !important",
    padding: "20px 0",
    borderTopRightRadius: "6px",
    borderTopLeftRadius: "6px",
  },
  textCenter: {
    textAlign: "center",
  },
  mrAuto,
  mlAuto,
};

const useStyles = makeStyles(signupPageStyle);

export default function MyWallet() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer justify="center">
        <GridItem xs={12} sm={10} md={10}>
          <Card className={classes.cardWallet}>
            <h4 className={classes.cardTitle}>
              Let us help you find what you're looking for!
            </h4>
            <div className={classes.description}>
              We are so sorry! The item you are searching for isn't on our
              platform yet. But a Ruckify team member can still find it for you!
              Just fill out the form below and we will get started.
            </div>
            <CardBody>
              <Form />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
